import { createReducer, on } from '@ngrx/store';
import { updateUser } from './auth.actions';
//import { User } from 'src/app/auth/models/auth-models';
//import { logOut, updateUser } from './auth.actions';

//export const initialState: User | {} = {};

/*export const userReducer = createReducer(
  initialState,
  on(updateUser, (state, { user }): User => user),
  on(logOut, (state): {} => (state = {}))
  );*/
export const initialState: string = ''
export const authReducer = createReducer(
initialState,
on(updateUser, (state, { user }) => user.token),
)
