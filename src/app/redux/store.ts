import { ActionReducer } from "@ngrx/store";
import { authReducer } from "./auth-reducer/auth.reducer";


export interface PageState {
  token: ActionReducer<string>
}
export const store = {
  token: authReducer
}
