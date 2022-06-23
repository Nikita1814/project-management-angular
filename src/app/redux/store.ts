import { ActionReducer } from "@ngrx/store";
import { authReducer } from "./auth-reducer/auth.reducer";
import { User } from "./types";


export interface PageState {
  user: ActionReducer<User>
}
export const store : PageState = {
  user: authReducer
}
