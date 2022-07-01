import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Board, BoardService } from 'src/app/boards/services/board.service';
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';
import { BoardFacadeService } from './board-facade.service';
import {
  boardError,
  initColumnCreation,
  initColumnDeletion,
  initColumnUpdate,
  initTaskCreation,
  initTaskDeletion,
  initTaskUpdate,
  requestBoard,
  updateBoard,
} from './board.actions';

@Injectable()
export class BoardEffects {
  getBoard$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(requestBoard),
      exhaustMap((action) =>
        this._boardService.getBoard(action.id).pipe(
          map((response: Board) => {
            return updateBoard({ board: response });
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: () => this._boardFacade.clearError(),
              },
            });
            return of(boardError({ error: error as HttpErrorResponse }));
          }),
        ),
      ),
    );
  });
  createColumn$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initColumnCreation),
      exhaustMap((action) =>
        this._boardService.createColumn(action.boardId, action.column).pipe(
          map((response: unknown) => {
            console.log('a column was created', response);
            return requestBoard({ id: action.boardId });
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: () => this._boardFacade.clearError(),
              },
            });
            return of(boardError({ error: error as HttpErrorResponse }));
          }),
        ),
      ),
    );
  });

  deleteColumn$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initColumnDeletion),
      exhaustMap((action) =>
        this._boardService.deleteColumn(action.boardId, action.columnId).pipe(
          map((_response: unknown) => {
            return requestBoard({ id: action.boardId });
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: () => this._boardFacade.clearError(),
              },
            });
            return of(boardError({ error: error as HttpErrorResponse }));
          }),
        ),
      ),
    );
  });

  updateColumn$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initColumnUpdate),
      exhaustMap((action) =>
        this._boardService
          .updateColumn(action.boardId, action.columnId, action.column)
          .pipe(
            map((_response: unknown) => {
              return requestBoard({ id: action.boardId });
            }),
            catchError((error: unknown) => {
              this._dialogService.open(ErrorModalComponent, {
                context: {
                  title: 'An error has occured',
                  message: `${(error as HttpErrorResponse).status}: ${
                    (error as HttpErrorResponse).message
                  }`,
                  closingActionFunction: () => this._boardFacade.clearError(),
                },
              });
              return of(boardError({ error: error as HttpErrorResponse }));
            }),
          ),
      ),
    );
  });

  createTask$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initTaskCreation),
      exhaustMap((action) =>
        this._boardService
          .createTask(action.boardId, action.columnId, action.task)
          .pipe(
            map((_response: unknown) => {
              return requestBoard({ id: action.boardId });
            }),
            catchError((error: unknown) => {
              this._dialogService.open(ErrorModalComponent, {
                context: {
                  title: 'An error has occured',
                  message: `${(error as HttpErrorResponse).status}: ${
                    (error as HttpErrorResponse).message
                  }`,
                  closingActionFunction: () => this._boardFacade.clearError(),
                },
              });
              return of(boardError({ error: error as HttpErrorResponse }));
            }),
          ),
      ),
    );
  });

  deleteTask$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initTaskDeletion),
      exhaustMap((action) =>
        this._boardService
          .deleteTask(action.boardId, action.columnId, action.taskId)
          .pipe(
            map((_response: unknown) => {
              return requestBoard({ id: action.boardId });
            }),
            catchError((error: unknown) => {
              this._dialogService.open(ErrorModalComponent, {
                context: {
                  title: 'An error has occured',
                  message: `${(error as HttpErrorResponse).status}: ${
                    (error as HttpErrorResponse).message
                  }`,
                  closingActionFunction: () => this._boardFacade.clearError(),
                },
              });
              return of(boardError({ error: error as HttpErrorResponse }));
            }),
          ),
      ),
    );
  });

  updateTask$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initTaskUpdate),
      exhaustMap((action) =>
        this._boardService.updateTask(action.task, action.taskId).pipe(
          map((_response: unknown) => {
            return requestBoard({ id: action.task.boardId });
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: () => this._boardFacade.clearError(),
              },
            });
            return of(boardError({ error: error as HttpErrorResponse }));
          }),
        ),
      ),
    );
  });
  constructor(
    private _actions$: Actions,
    private _boardService: BoardService,
    private _boardFacade: BoardFacadeService,
    private _dialogService: NbDialogService,
  ) {}
}
