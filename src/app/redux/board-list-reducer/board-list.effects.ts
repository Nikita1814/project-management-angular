import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { BoardListItem, BoardService } from 'src/app/boards/services/board.service';
import { BoardListFacadeService } from './board-list-facade.service';
import { boardListError, initBoardCreation, initBoardDeletion, requestBoardList, updateBoardList } from './board-list.actions';
@Injectable()
export class AuthEffects {
  getBoardList$ =  createEffect(() => {
    
    return this.actions$.pipe(
      ofType(requestBoardList),
      exhaustMap((action) =>
        this.boardService.getBoards().pipe(
          map((response: BoardListItem[]) => {
            return updateBoardList({boardList: response })
          }),
          catchError((error: unknown) => {
            return of(boardListError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  })

  createBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initBoardCreation),
      exhaustMap((action) =>
        this.boardService.createBoard(action.board).pipe(
          map((response: BoardListItem) => {
            return requestBoardList()
          }),
          catchError((error: unknown) => {
            return of(boardListError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  });

  deeteBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initBoardDeletion),
      exhaustMap((action) =>
        this.boardService.deleteBoard(action.boardId).pipe(
          map((response: unknown) => {
            return requestBoardList()
          }),
          catchError((error: unknown) => {
            return of(boardListError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private boardListFacade: BoardListFacadeService,
    private dialogService: NbDialogService
  ) {}
}
