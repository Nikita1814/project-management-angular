import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = '';
  constructor(private http: HttpClient) {}

  SignUp(user: { login: ''; password: '' }) {

  }
  SignIn() {

  }
  Edit() {
    
  }
}
