import { HttpErrorResponse } from "@angular/common/http"

export interface User {
  id: string
  name:string,
  login:string,
  password?:string,
  token?: string,
}

export interface AuthState{
  user: User,
  authError: HttpErrorResponse | null
}
