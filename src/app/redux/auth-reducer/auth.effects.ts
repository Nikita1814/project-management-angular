import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import jwtDecode from 'jwt-decode';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { AuthService, UserEditResponse, UserSignInResponse, UserSignUpResponse } from 'src/app/auth/services/auth.service';
import { User } from '../types';
import { authorizationError, finalizeSignUp, initiateEdit, initiateSignIn, initiateSignUp, updateUser } from './auth.actions';
/*import { VideoResponse } from 'src/app/youtube/models/you-tube-models';
import { SearchService } from 'src/app/youtube/services/search.service';
import {
  initiateSearch,
  searchItemsError,
  updateSearchItems,
} from './search-item.actions';
*/
@Injectable()
export class AuthEffects {
  
  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initiateSignIn),
      exhaustMap((action) =>
        this.authService.signIn(action.user).pipe(
          map((response: UserSignInResponse) => {
            const parsedUser = jwtDecode(response.token) as User
            return updateUser({ user: {...parsedUser, token:response.token} as User});
          }),
          catchError((error: unknown) => {
            return of(authorizationError({ error: error as HttpErrorResponse }));
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
             return finalizeSignUp
          }),
          catchError((error: unknown) => {
            return of(authorizationError({ error: error as HttpErrorResponse }));
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
            return updateUser({ user: action.user as User});
          }),
          catchError((error: unknown) => {
            return of(authorizationError({ error: error as HttpErrorResponse }));
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
