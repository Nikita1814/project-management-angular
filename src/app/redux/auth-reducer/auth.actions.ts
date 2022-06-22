import { createAction, props } from '@ngrx/store';

export const updateUser = createAction(
  '[Login Page] Login / Signup',
  props<{ user: {
    name?: string,
    login?:string,
    password?: string
    token: string
  } }>()
);

export const logOut = createAction('[ Header ] Logout');
