import { createReducer, on, State } from '@ngrx/store';
import { AuthState, User } from '../types';
import { authorizationError, clearAuthorizationError, updateUser } from './auth.actions';

export const initialState: AuthState = {
  user: {
    id:'',
    name:'',
    login:'',
    password:'',
  },
  authError: null
}

export const authReducer = createReducer(
initialState,
on(updateUser, (state, { user }) => ({...state, user : user})),
on(authorizationError, (state, {error}) => ({...state, authError: error})),
on(clearAuthorizationError, (state) => ({...state, authError: null}))
)
