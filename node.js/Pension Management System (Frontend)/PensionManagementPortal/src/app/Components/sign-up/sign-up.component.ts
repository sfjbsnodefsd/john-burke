import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/Services/TokenService/signup.token.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public signupService: SignupService) {}

  emailexists = null;

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.signupService
      .SignUpMember(form.value.email, form.value.password)
      .subscribe({next:res =>{
        this.emailexists = 201;
      },error : error => {
          this.emailexists = 409;
        }
  });
    
  }

  ngOnInit(): void {}
}
