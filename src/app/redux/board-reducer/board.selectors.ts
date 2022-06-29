import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, BoardListState, User } from '../types';

const selectBoardListFeature = createFeatureSelector<BoardListState>('boardList');

export const selectBoardList = createSelector(
  selectBoardListFeature,
  ( state: BoardListState ) => state.boardList
);

export const selectBoardListError  = createSelector(
  selectBoardListFeature,
  ( state: BoardListState ) => state.boardListError
)
