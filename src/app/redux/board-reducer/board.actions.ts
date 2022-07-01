import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  Board,
  ColumnCreationRequest,
  ColumnUpdateRequest,
  TaskCreationRequest,
  TaskUpdateRequest,
} from 'src/app/boards/services/board.service';

export const updateBoard = createAction(
  '[Board Page] Board Request Success',
  props<{ board: Board }>(),
);
export const requestBoard = createAction(
  '[Board Page] Board Request ',
  props<{ id: string }>(),
);
export const initColumnCreation = createAction(
  '[Board Page] Initiate Column Creation',
  props<{ column: ColumnCreationRequest; boardId: string }>(),
);
export const initColumnDeletion = createAction(
  '[Board Page] Initiate Column Deletion',
  props<{ boardId: string; columnId: string }>(),
);

export const initColumnUpdate = createAction(
  '[Board Page] Initiate Column Update ',
  props<{ boardId: string; columnId: string; column: ColumnUpdateRequest }>(),
);

export const initTaskCreation = createAction(
  '[Board Page] Initiate Task Creation',
  props<{ boardId: string; columnId: string; task: TaskCreationRequest }>(),
);
export const initTaskDeletion = createAction(
  '[Board Page] Initiate Task Deletion',
  props<{ boardId: string; columnId: string; taskId: string }>(),
);

export const initTaskUpdate = createAction(
  '[Board Page] Initiate Task Update ',
  props<{ task: TaskUpdateRequest; taskId: string }>(),
);

export const boardError = createAction(
  '[Board Page] Board Error',
  props<{ error: HttpErrorResponse }>(),
);

export const clearBoardError = createAction(' [Board Page] Clear Board Error ');
