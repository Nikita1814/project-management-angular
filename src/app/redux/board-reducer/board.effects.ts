import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { Board, BoardListItem, BoardService } from 'src/app/boards/services/board.service';
import { BoardFacadeService } from './board-facade.service';
import { boardError, initColumnCreation, initColumnDeletion, initColumnUpdate, initTaskCreation, initTaskDeletion, initTaskUpdate, requestBoard, updateBoard } from './board.actions';
@Injectable()
export class BoardEffects {
  getBoard$ =  createEffect(() => {

    return this.actions$.pipe(
      ofType(requestBoard),
      exhaustMap((action) =>
        this.boardService.getBoard(action.id).pipe(
          map((response: Board) => {
            return updateBoard({board: response })
          }),
          catchError((error: unknown) => {
            return of(boardError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })
  createColumn$ =  createEffect(() => {

    return this.actions$.pipe(
      ofType(initColumnCreation),
      exhaustMap((action) =>
        this.boardService.createColumn(action.boardId, action.column).pipe(
          map((response: unknown) => {
            console.log('a column was created', response)
            return requestBoard({id:action.boardId})
          }),
          catchError((error: unknown) => {
            return of(boardError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })

  deleteColumn$ =  createEffect(() => {
    return this.actions$.pipe(
      ofType(initColumnDeletion),
      exhaustMap((action) =>
        this.boardService.deleteColumn(action.boardId, action.columnId).pipe(
          map((response: unknown) => {
            return requestBoard({id:action.boardId})
          }),
          catchError((error: unknown) => {
            return of(boardError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })

  updateColumn$ =  createEffect(() => {

    return this.actions$.pipe(
      ofType(initColumnUpdate),
      exhaustMap((action) =>
        this.boardService.updateColumn(action.boardId, action.columnId, action.column).pipe(
          map((response: unknown) => {
            return requestBoard({id:action.boardId})
          }),
          catchError((error: unknown) => {
            return of(boardError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })

  createTask$ =  createEffect(() => {

    return this.actions$.pipe(
      ofType(initTaskCreation),
      exhaustMap((action) =>
        this.boardService.createTask(action.boardId, action.columnId, action.task).pipe(
          map((response: unknown) => {
            return requestBoard({id:action.boardId})
          }),
          catchError((error: unknown) => {
            return of(boardError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })


  deleteTask$ =  createEffect(() => {

    return this.actions$.pipe(
      ofType(initTaskDeletion),
      exhaustMap((action) =>
        this.boardService.deleteTask(action.boardId, action.columnId, action.taskId).pipe(
          map((response: unknown) => {
            return requestBoard({id:action.boardId})
          }),
          catchError((error: unknown) => {
            return of(boardError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })

  updateTask$ =  createEffect(() => {
    return this.actions$.pipe(
      ofType(initTaskUpdate),
      exhaustMap((action) =>
        this.boardService.updateTask(action.task, action.taskId).pipe(
          map((response: unknown) => {
            return requestBoard({id:action.task.boardId})
          }),
          catchError((error: unknown) => {
            return of(boardError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })
  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private boardListFacade: BoardFacadeService,
    private dialogService: NbDialogService
  ) {}
}
