import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/Services/TokenService/signup.token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public signupService: SignupService) { }


  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.signupService.SignInMember(form.value.email, form.value.password)


  }



  ngOnInit(): void {
  }

}
