import { ActionReducer } from "@ngrx/store";
import { authReducer } from "./auth-reducer/auth.reducer";
import { boardListReducer } from "./board-list-reducer/board-list.reducer";
import { boardReducer } from "./board-reducer/board.reducer";
import { AuthState, BoardListState, BoardState, User } from "./types";


export interface PageState {
  user: ActionReducer<AuthState>
  boardList: ActionReducer<BoardListState>
  board: ActionReducer<BoardState>
}
export const store : PageState = {
  user: authReducer,
  boardList: boardListReducer,
  board: boardReducer
}
