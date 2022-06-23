import { createAction, props } from '@ngrx/store';
import { User } from '../types';

export const updateUser = createAction(
  '[Login Page] Login / Signup SUCCESS',
  props<{user: User}>()
);

export const logOut = createAction('[ Header ] Logout');
