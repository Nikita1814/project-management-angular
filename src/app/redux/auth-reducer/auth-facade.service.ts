import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../types';
import {
  clearAuthorizationError,
  initiateEdit,
  initiateSignIn,
  initiateSignUp,
  logOut,
  updateUser,
} from './auth.actions';
import { selectUser } from './auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  user$ = this._store.select(selectUser);
  constructor(private _store: Store, private _router: Router) {}

  showUserId() {
    let userId: string = '';
    this.user$.subscribe((user: User) => (userId = user.userId));
    return userId;
  }
  updateUser(user: User) {
    this._store.dispatch(updateUser({ user: user }));
  }

  initiateSignIn(user: { login: string; password: string }) {
    console.log('dispatching signIn ');
    this._store.dispatch(initiateSignIn({ user: user }));
  }

  initiateSignUp(user: { login: string; password: string; name: string }) {
    console.log('dspatching sign up');
    this._store.dispatch(initiateSignUp({ user: user }));
  }

  initiateEdit(user: User) {
    this._store.dispatch(initiateEdit({ user: { ...user } }));
  }
  clearError() {
    this._store.dispatch(clearAuthorizationError());
  }
  logOut() {
    this._store.dispatch(logOut());
    this._router.navigate(['auth']);
  }
}
