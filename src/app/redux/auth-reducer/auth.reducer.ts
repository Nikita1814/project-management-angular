import { createReducer, on, State } from '@ngrx/store';
import { userInfo } from 'os';
import { AuthState, User } from '../types';
import { updateUser } from './auth.actions';
//import { User } from 'src/app/auth/models/auth-models';
//import { logOut, updateUser } from './auth.actions';


export const initialState: AuthState = {
  user: {
    id:'',
    name:'',
    login:'',
    password:'',
  },
  authError: null
}
/*export const userReducer = createReducer(
  initialState,
  on(updateUser, (state, { user }): User => user),
  on(logOut, (state): {} => (state = {}))
  );*/
//export const initialState: string = ''
export const authReducer = createReducer(
initialState,
on(updateUser, (state, { user }) => ({...state, user : user})),
)
