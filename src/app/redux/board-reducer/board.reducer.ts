import { createReducer, on, State } from '@ngrx/store';
import { AuthState, BoardListState, BoardState, User } from '../types';
import { boardError, clearBoardError, requestBoard, updateBoard } from './board.actions';



export const initialState: BoardState = {
  board: null ,
  boardError: null
}


export const boardReducer = createReducer(
initialState,
on(updateBoard, (state, { board }) => ({...state, board:board})),
on(boardError, (state, {error}) => ({...state, boardError: error})),
on(clearBoardError, (state) => ({...state, boardError: null})),
)

