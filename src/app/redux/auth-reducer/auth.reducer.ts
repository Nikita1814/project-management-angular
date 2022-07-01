import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../types';
import {
  authorizationError,
  clearAuthorizationError,
  logOut,
  updateUser,
} from './auth.actions';

export const initialState: AuthState = {
  user: {
    userId: '',
    name: '',
    login: '',
    password: '',
  },
  authError: null,
};

export const authReducer = createReducer(
  initialState,
  on(updateUser, (state, { user }): AuthState => ({ ...state, user: user })),
  on(
    authorizationError,
    (state, { error }): AuthState => ({ ...state, authError: error }),
  ),
  on(
    clearAuthorizationError,
    (state): AuthState => ({ ...state, authError: null }),
  ),
  on(
    logOut,
    (state): AuthState => ({
      ...state,
      user: {
        userId: '',
        name: '',
        login: '',
        password: '',
      },
    }),
  ),
);
