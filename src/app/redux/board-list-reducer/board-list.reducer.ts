import { createReducer, on } from '@ngrx/store';
import { BoardListState } from '../types';
import {
  boardListError,
  clearBoardListError,
  updateBoardList,
} from './board-list.actions';

export const initialState: BoardListState = {
  boardList: [],
  boardListError: null,
};

export const boardListReducer = createReducer(
  initialState,
  on(
    updateBoardList,
    (state, { boardList }): BoardListState => ({
      ...state,
      boardList: boardList,
    }),
  ),
  on(
    boardListError,
    (state, { error }): BoardListState => ({ ...state, boardListError: error }),
  ),
  on(
    clearBoardListError,
    (state): BoardListState => ({ ...state, boardListError: null }),
  ),
);
