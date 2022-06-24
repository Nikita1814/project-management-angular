import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { BoardListItem, BoardService } from 'src/app/boards/services/board.service';
import { BoardListFacadeService } from './board-list-facade.service';
import { boardListError, initBoardCreation, requestBoardList, updateBoardList } from './board-list.actions';
@Injectable()
export class AuthEffects {
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


  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private boardListFacade: BoardListFacadeService,
    private dialogService: NbDialogService
  ) {}
}
