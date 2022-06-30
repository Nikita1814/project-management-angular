import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/redux/types';

export interface UserSignUpResponse {
  id: string;
  name: string;
  login: string;
}

export interface UserSignInResponse {
  token: string;
}
export interface UserSignUpResponse {
  id: string;
  name: string;
  login: string;
}
export interface UserEditResponse {
  id: string,
  name: string,
  login: string
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://gentle-earth-67890.herokuapp.com/';
  constructor(private http: HttpClient) {}

  signUp(user: { name: string; login: string; password: string }) {
    return this.http.post<UserSignUpResponse>(`${this.apiUrl}signup`, user);
  }
  signIn(user: { login: string; password: string }) {
    return this.http.post<UserSignInResponse>(`${this.apiUrl}signin`, user);
  }
  edit(user: User) {
    return this.http.put<UserEditResponse>(`${this.apiUrl}/users/${user.userId}`, user);
  }
  getUser(id: string){
    return this.http.get<UserSignInResponse>(`${this.apiUrl}/users/${id}`)
  }
}
