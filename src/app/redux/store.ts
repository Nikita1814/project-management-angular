import { ActionReducer } from "@ngrx/store";
import { authReducer } from "./auth-reducer/auth.reducer";
import { boardListReducer } from "./board-list-reducer/board-list.reducer";
import { AuthState, BoardListState, User } from "./types";


export interface PageState {
  user: ActionReducer<AuthState>
  boardList: ActionReducer<BoardListState>
}
export const store : PageState = {
  user: authReducer,
  boardList: boardListReducer
}
