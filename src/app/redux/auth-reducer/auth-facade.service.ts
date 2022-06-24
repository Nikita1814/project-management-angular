import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../types';
import { initiateEdit, initiateSignIn, initiateSignUp, updateUser } from './auth.actions';
import { selectUser } from './auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  user$ = this.store.select(selectUser);
  constructor(private store: Store) {}
  updateUser(user: User) {
    this.store.dispatch(updateUser({ user: user }));
  }

  initiateSignIn(user: { login: string; password: string }) {
    this.store.dispatch(initiateSignIn({ user: user }));
  }

  initiateSignUp(user: { login: string; password: string; name: string }) {
    this.store.dispatch(initiateSignUp({ user: user }));
  }

  initiateEdit(user:User) {
    this.store.dispatch(initiateEdit({user: user}))
  }
}
