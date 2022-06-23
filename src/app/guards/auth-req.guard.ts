import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthFacadeService } from '../redux/auth-reducer/auth-facade.service';
import { User } from '../redux/types';

@Injectable({
  providedIn: 'root'
})
export class AuthReqGuard implements CanActivate {
  constructor( private authFacade:AuthFacadeService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean | UrlTree> {
    return this.authFacade.user$.pipe(
      map((user: User | {}) => {
        if ((user as User).token) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth']);
        }
      })
      )
  }

}
