import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFacadeService } from '../redux/auth-reducer/auth-facade.service';
import { User } from '../redux/types';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  token: string | undefined;
  constructor(private _authFacade: AuthFacadeService) {
    this._authFacade.user$.subscribe((user: User) => (this.token = user.token));
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('/signin') || request.url.includes('/signUp')) {
      return next.handle(request);
    } else {
      if (this.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`,
          },
        });
      }
      return next.handle(request);
    }
  }
}
