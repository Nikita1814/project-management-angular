import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardState } from '../types';

const selectBoardFeature = createFeatureSelector<BoardState>('board');

export const selectBoard = createSelector(
  selectBoardFeature,
  (state: BoardState) => state.board,
);

export const selectBoardListError = createSelector(
  selectBoardFeature,
  (state: BoardState) => state.boardError,
);
