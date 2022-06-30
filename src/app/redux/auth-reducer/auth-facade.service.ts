import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { User } from '../types';
import { clearAuthorizationError, initiateEdit, initiateSignIn, initiateSignUp, logOut, updateUser } from './auth.actions';
import { selectUser } from './auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  user$ = this.store.select(selectUser);
  constructor(private store: Store) {}

  showUserId() {
    let userId: string = ''
    this.user$.subscribe((user:User) => userId = user.userId)
    return userId
  }
  updateUser(user: User) {
    this.store.dispatch(updateUser({ user: user }));
  }

  initiateSignIn(user: { login: string; password: string }) {
    console.log('dispatching signIn ')
    this.store.dispatch(initiateSignIn({ user: user }));
  }

  initiateSignUp(user: { login: string; password: string; name: string }) {
    console.log('dspatching sign up')
    this.store.dispatch(initiateSignUp({ user: user }));
  }

  initiateEdit(user:User) {
    this.store.dispatch(initiateEdit({user: {...user}}))
  }
  clearError(){
    this.store.dispatch(clearAuthorizationError())
  }
  logOut(){
    this.store.dispatch(logOut())
  }
}
