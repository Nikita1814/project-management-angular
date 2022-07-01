import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  BoardCreationRequest,
  BoardListItem,
} from 'src/app/boards/services/board.service';

export const updateBoardList = createAction(
  '[Board List Page] Board List Request  SUCCESS',
  props<{ boardList: BoardListItem[] }>(),
);

export const requestBoardList = createAction(
  '[Board List Page] Board List Request',
);

export const boardListError = createAction(
  '[Board List Page] Board List Error',
  props<{ error: HttpErrorResponse }>(),
);

export const clearBoardListError = createAction(
  ' [Board List Page] Clear Board List Error ',
);

export const initBoardCreation = createAction(
  ' [Board List Page] Init Board Creation ',
  props<{ board: BoardCreationRequest }>(),
);

export const initBoardDeletion = createAction(
  ' [Board List Page] Init Board Deletion ',
  props<{ boardId: string }>(),
);
