import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,

} from '@angular/router';
import { Observable } from 'rxjs';

import { SignupService } from 'src/app/Services/TokenService/signup.token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public signupService: SignupService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.signupService.getIsAuth();
    if (!isAuth) {
      this.router.navigate(['login']);
    }
    return isAuth
  }
}
