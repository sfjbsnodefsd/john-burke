import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupService } from 'src/app/Services/TokenService/signup.token.service';
import { catchError } from 'rxjs/operators';

@Injectable()

//works like middleware like nodejs for outgoing instead of incoing requests
//takes request and adds the auth token to it
export class AuthInterceptor implements HttpInterceptor {
  constructor(public signupService: SignupService) { }
  //getToken method from signup service
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.signupService.getToken();
    const authRequest = req.clone({
      //creates request which holds auth header with the token
      headers: req.headers.set('Authorization', 'Bearer ' + authToken),
    });

    return next.handle(authRequest).pipe(
      catchError((err, caught) => {
        if (err.status === 401) {
          this.signupService.logout();
        }
        throw err;
      })
    );
  }
}
