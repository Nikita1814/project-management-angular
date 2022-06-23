import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../types';
import { updateUser } from './auth.actions';
import { selectUser } from './auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  user$ = this.store.select(selectUser)
  constructor( private store: Store) {
   }
   updateUser (user:User) {
   this.store.dispatch(updateUser({user: user}))
   }
}
