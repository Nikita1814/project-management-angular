import { createReducer, on } from '@ngrx/store';
import { BoardState } from '../types';
import { boardError, clearBoardError, updateBoard } from './board.actions';

export const initialState: BoardState = {
  board: null,
  boardError: null,
};

export const boardReducer = createReducer(
  initialState,
  on(
    updateBoard,
    (state, { board }): BoardState => ({ ...state, board: board }),
  ),
  on(
    boardError,
    (state, { error }): BoardState => ({ ...state, boardError: error }),
  ),
  on(clearBoardError, (state): BoardState => ({ ...state, boardError: null })),
);
