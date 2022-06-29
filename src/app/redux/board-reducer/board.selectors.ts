import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Board } from 'src/app/boards/services/board.service';
import { AuthState, BoardListState, BoardState, User } from '../types';

const selectBoardFeature = createFeatureSelector<BoardState>('board');

export const selectBoard = createSelector(
  selectBoardFeature,
  ( state: BoardState ) => state.board
);

export const selectBoardListError  = createSelector(
  selectBoardFeature,
  ( state: BoardState ) => state.boardError
)
