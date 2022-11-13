import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MemberData } from '../../Model/SignUp.model';

const AuthURL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false


  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token
  }

  //find if memeber is authenticated
  getIsAuth() {
    return this.isAuthenticated
  }

  getAuthStatusListener() {
    //asObservable cant omit new values from other components
    return this.authStatusListener.asObservable()
  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    //redirect
    this.router.navigate([""])
  }


  SignUpMember(email: string, password: string) {
    const memberData: MemberData = { email: email, password: password }

    this.http.post(`${AuthURL}/SignUp`, memberData).subscribe(res => {
      console.log(res)
      this.router.navigate([""])
    })
  }

  SignInMember(email: string, password: string) {
    const memberData: MemberData = { email: email, password: password }
    //expect token back
    this.http.post<{ token: string }>(`${AuthURL}/login`, memberData)
      .subscribe(res => {
        const token = res.token
        this.token = token
        if (token) {
          //inform other components of authnecation
          this.authStatusListener.next(true)
          //redirect on login
          this.router.navigate(["SearchPage"])
        }
      })
  }
}

