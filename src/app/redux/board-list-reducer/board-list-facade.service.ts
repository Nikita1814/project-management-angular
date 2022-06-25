import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardCreationRequest } from 'src/app/boards/services/board.service';
import { clearBoardListError, initBoardCreation, initBoardDeletion, requestBoardList } from './board-list.actions';
import { selectBoardList } from './board-list.selectors';

@Injectable({
  providedIn: 'root'
})
export class BoardListFacadeService {
  boardList$ = this.store.select(selectBoardList);
  constructor(private store: Store) {}

  requestBoardList() {
    this.store.dispatch(requestBoardList())
  }

  initiateBoardCreation(board:BoardCreationRequest) {
    this.store.dispatch(initBoardCreation({board}))
  }
  clearError(){
    this.store.dispatch(clearBoardListError())
  }
  deleteBoard(boardId:string){
    this.store.dispatch(initBoardDeletion({boardId}))
  }
}
