import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
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
import { selectBoard } from './board.selectors';

@Injectable({
  providedIn: 'root',
})
export class BoardFacadeService {
  board$ = this._store.select(selectBoard);
  constructor(private _store: Store) {}

  requestBoard(id: string) {
    this._store.dispatch(requestBoard({ id }));
  }

  clearError() {
    this._store.dispatch(clearBoardError());
  }

  initiateColumnCreation(column: ColumnCreationRequest, boardId: string) {
    this._store.dispatch(initColumnCreation({ column, boardId }));
  }

  initiateColumnDeletion(boardId: string, columnId: string) {
    this._store.dispatch(initColumnDeletion({ boardId, columnId }));
  }

  initiateColumnUpdate(
    boardId: string,
    columnId: string,
    column: ColumnUpdateRequest,
  ) {
    this._store.dispatch(initColumnUpdate({ boardId, columnId, column }));
  }
  initiateTaskCreation(
    boardId: string,
    columnId: string,
    task: TaskCreationRequest,
  ) {
    this._store.dispatch(initTaskCreation({ boardId, columnId, task }));
  }
  initiateTaskDeletion(boardId: string, columnId: string, taskId: string) {
    this._store.dispatch(initTaskDeletion({ boardId, columnId, taskId }));
  }

  initiateTaskUpdate(task: TaskUpdateRequest, taskId: string) {
    this._store.dispatch(initTaskUpdate({ task, taskId }));
  }
}
