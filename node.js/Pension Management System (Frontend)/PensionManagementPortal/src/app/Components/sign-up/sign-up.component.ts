import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/Services/TokenService/signup.token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(public signupService: SignupService, private router: Router) { }

  emailexists = null;
  FadeOutEffect = '';

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.signupService
      .SignUpMember(form.value.email, form.value.password)
      .subscribe({
        next: (res) => {
          this.emailexists = 201;
          this.router.navigate(['']);
        },
        error: (error) => {
          this.emailexists = 409;
        },
      });
  }

  FadeOut() {
    //calls fade out class which is on update section
    this.FadeOutEffect = '';
    setTimeout(() => {
      this.FadeOutEffect = 'fade-out-text';
    }, 0);
  }

}