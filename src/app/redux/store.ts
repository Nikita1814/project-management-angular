import { ActionReducer } from "@ngrx/store";
import { authReducer } from "./auth-reducer/auth.reducer";
import { AuthState, User } from "./types";


export interface PageState {
  user: ActionReducer<AuthState>
}
export const store : PageState = {
  user: authReducer
}
