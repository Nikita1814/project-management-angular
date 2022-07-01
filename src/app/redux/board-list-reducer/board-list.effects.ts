import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {
  BoardListItem,
  BoardService,
} from 'src/app/boards/services/board.service';
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';
import { BoardListFacadeService } from './board-list-facade.service';
import {
  boardListError,
  initBoardCreation,
  initBoardDeletion,
  requestBoardList,
  updateBoardList,
} from './board-list.actions';

@Injectable()
export class BoardListEffects {
  getBoardList$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(requestBoardList),
      exhaustMap((_action) =>
        this._boardService.getBoards().pipe(
          map((response: BoardListItem[]) => {
            return updateBoardList({ boardList: response });
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: () => this._boardListFacade.clearError(),
              },
            });
            return of(boardListError({ error: error as HttpErrorResponse }));
          }),
        ),
      ),
    );
  });

  createBoard$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initBoardCreation),
      exhaustMap((action) =>
        this._boardService.createBoard(action.board).pipe(
          map((_response: BoardListItem) => {
            return requestBoardList();
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: () => this._boardListFacade.clearError(),
              },
            });
            return of(boardListError({ error: error as HttpErrorResponse }));
          }),
        ),
      ),
    );
  });

  deleteBoard$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initBoardDeletion),
      exhaustMap((action) =>
        this._boardService.deleteBoard(action.boardId).pipe(
          map((_response: unknown) => {
            return requestBoardList();
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: () => this._boardListFacade.clearError(),
              },
            });
            return of(boardListError({ error: error as HttpErrorResponse }));
          }),
        ),
      ),
    );
  });
  constructor(
    private _actions$: Actions,
    private _boardService: BoardService,
    private _boardListFacade: BoardListFacadeService,
    private _dialogService: NbDialogService,
  ) {}
}
