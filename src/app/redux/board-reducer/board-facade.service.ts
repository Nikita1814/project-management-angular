import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BoardCreationRequest,
  ColumnCreationRequest,
  ColumnUpdateRequest,
  TaskCreationRequest,
  TaskUpdateRequest,
} from 'src/app/boards/services/board.service';
import {
  clearBoardError,
  initColumnCreation,
  initColumnDeletion,
  initColumnUpdate,
  initTaskCreation,
  initTaskDeletion,
  initTaskUpdate,
  requestBoard,
} from './board.actions';
import { selectBoardList } from './board.selectors';

@Injectable({
  providedIn: 'root',
})
export class BoardFacadeService {
  boardList$ = this.store.select(selectBoardList);
  constructor(private store: Store) {}

  clearError() {
    this.store.dispatch(clearBoardError());
  }

  initiateColummnCreation(column: ColumnCreationRequest, boardId: string) {
    this.store.dispatch(initColumnCreation({ column, boardId }));
  }

  initiateColumnDeletion(boardId: string, columnId: string) {
    this.store.dispatch(initColumnDeletion({ boardId, columnId }));
  }

  initiateColumnUpdate(
    boardId: string,
    columnId: string,
    column: ColumnUpdateRequest
  ) {
    this.store.dispatch(initColumnUpdate({ boardId, columnId, column }));
  }
  initiateTaskCreation(
    boardId: string,
    columnId: string,
    task: TaskCreationRequest
  ) {
    this.store.dispatch(initTaskCreation({ boardId, columnId, task }));
  }
  initiateTaskDeletion(boardId: string, columnId: string, taskId: string) {
    this.store.dispatch(initTaskDeletion({boardId, columnId, taskId }))
  }

  initiateTaskUpdate(task: TaskUpdateRequest, taskId: string) {
    this.store.dispatch(initTaskUpdate({task, taskId}))
  }
}
