import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import jwtDecode from 'jwt-decode';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import {
  AuthService,
  UserEditResponse,
  UserSignInResponse,
  UserSignUpResponse,
} from 'src/app/auth/services/auth.service';
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';
import { User } from '../types';
import { AuthFacadeService } from './auth-facade.service';
import {
  authorizationError,
  finalizeSignUpAndEdit,
  initiateEdit,
  initiateSignIn,
  initiateSignUp,
  updateUser,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initiateSignIn),
      exhaustMap((action) =>
        this._authService.signIn(action.user).pipe(
          map((response: UserSignInResponse) => {
            console.log('recieved response', response);
            const parsedUser = jwtDecode(response.token) as User;
            console.log('parsed user as', parsedUser);
            this._router.navigate(['auth']);
            return updateUser({
              user: {
                ...parsedUser,
                password: action.user.password,
                token: response.token,
              } as User,
            });
          }),
          catchError((error: unknown) => {
            console.log('caught a sign up error');
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: this._authFacade.clearError,
              },
            });
            return of(
              authorizationError({ error: error as HttpErrorResponse }),
            );
          }),
        ),
      ),
    );
  });

  signUp$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initiateSignUp),
      exhaustMap((action) =>
        this._authService.signUp(action.user).pipe(
          map((_response: UserSignUpResponse) => {
            console.log('sign up initiated');
            return finalizeSignUpAndEdit();
          }),
          catchError((error: unknown) => {
            console.log('sign up error detected');
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: this._authFacade.clearError,
              },
            });
            return of(
              authorizationError({ error: error as HttpErrorResponse }),
            );
          }),
        ),
      ),
    );
  });

  edit$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(initiateEdit),
      exhaustMap((action) =>
        this._authService.edit(action.user).pipe(
          map((_response: UserEditResponse) => {
            return updateUser({ user: action.user as User });
          }),
          catchError((error: unknown) => {
            this._dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${
                  (error as HttpErrorResponse).message
                }`,
                closingActionFunction: this._authFacade.clearError,
              },
            });
            return of(
              authorizationError({ error: error as HttpErrorResponse }),
            );
          }),
        ),
      ),
    );
  });

  signUpAndEditSucess$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(finalizeSignUpAndEdit),
      tap(() => this._router.navigate(['/auth/logIn'])),
    );
  });

  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _authFacade: AuthFacadeService,
    private _router: Router,
    private _dialogService: NbDialogService,
  ) {}
}
