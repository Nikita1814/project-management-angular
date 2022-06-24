import { createReducer, on, State } from '@ngrx/store';
import { AuthState, BoardListState, User } from '../types';
import { boardListError, clearBoardListError, updateBoardList } from './board-list.actions';


export const initialState: BoardListState = {
  boardList: [],
  boardListError: null
}


export const boardListReducer = createReducer(
initialState,
on(updateBoardList, (state, { boardList }) => ({...state, boardList : boardList})),
on(boardListError, (state, {error}) => ({...state, boardListError: error})),
on(clearBoardListError, (state) => ({...state, boardListError: null})),
)

