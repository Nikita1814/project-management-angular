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
    return this.actions$.pipe(
      ofType(initiateSignIn),
      exhaustMap((action) =>
        this.authService.signIn(action.user).pipe(
          map((response: UserSignInResponse) => {
            const parsedUser = jwtDecode(response.token) as User;
            return updateUser({
              user: { ...parsedUser, token: response.token } as User,
            });
          }),
          catchError((error: unknown) => {
            this.dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${(error as HttpErrorResponse).message}`,
                closingActionFunction: this.authFacade.clearError
              }});
            return of(
              authorizationError({ error: error as HttpErrorResponse })
            );
          })
        )
      )
    );
  });

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initiateSignUp),
      exhaustMap((action) =>
        this.authService.signUp(action.user).pipe(
          map((response: UserSignUpResponse) => {
            return finalizeSignUpAndEdit();
          }),
          catchError((error: unknown) => {
            this.dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${(error as HttpErrorResponse).message}`,
                closingActionFunction: this.authFacade.clearError
              }});
            return of(
              authorizationError({ error: error as HttpErrorResponse })
            );
          })
        )
      )
    );
  });

  edit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initiateEdit),
      exhaustMap((action) =>
        this.authService.edit(action.user).pipe(
          map((response: UserEditResponse) => {
            return updateUser({ user: action.user as User });
          }),
          catchError((error: unknown) => {
            this.dialogService.open(ErrorModalComponent, {
              context: {
                title: 'An error has occured',
                message: `${(error as HttpErrorResponse).status}: ${(error as HttpErrorResponse).message}`,
                closingActionFunction: this.authFacade.clearError
              }});
            return of(
              authorizationError({ error: error as HttpErrorResponse })
            );
          })
        )
      )
    );
  });

  signUpAndEditSucess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(finalizeSignUpAndEdit),
      tap(() => this.router.navigate(['/auth/logIn']))
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authFacade: AuthFacadeService,
    private router: Router,
    private dialogService: NbDialogService
  ) {}
}
