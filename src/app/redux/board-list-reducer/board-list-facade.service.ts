import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardCreationRequest } from 'src/app/boards/services/board.service';
import {
  clearBoardListError,
  initBoardCreation,
  initBoardDeletion,
  requestBoardList,
} from './board-list.actions';
import { selectBoardList } from './board-list.selectors';

@Injectable({
  providedIn: 'root',
})
export class BoardListFacadeService {
  boardList$ = this._store.select(selectBoardList);
  constructor(private _store: Store) {}

  requestBoardList() {
    this._store.dispatch(requestBoardList());
  }

  initiateBoardCreation(board: BoardCreationRequest) {
    this._store.dispatch(initBoardCreation({ board }));
  }
  clearError() {
    this._store.dispatch(clearBoardListError());
  }
  deleteBoard(boardId: string) {
    this._store.dispatch(initBoardDeletion({ boardId }));
  }
}
