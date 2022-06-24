import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { User } from '../types';

export const updateUser = createAction(
  '[Authorization] SignIn / Edit SUCCESS',
  props<{ user: User }>()
);

export const finalizeSignUp = createAction('[SignUp Page] SignUp SUCCESS');

export const initiateSignIn = createAction(
  '[SigngIn Page] Initiate SignIn',
  props<{
    user: {
      login: string;
      password: string;
    };
  }>()
);

export const authorizationError = createAction(
  '[Authorization] AuthorizationError Error',
  props<{ error: HttpErrorResponse }>()
);

export const initiateSignUp = createAction(
  '[SignUp Page] Initiate SignUp',
  props<{
    user: {
      login: string;
      password: string;
      name: string;
    };
  }>()
);

export const initiateEdit = createAction(
  '[Edit Page] Initiate Edit',
  props<{ user: User }>()
);

export const logOut = createAction('[ Authorization ] Logout');
