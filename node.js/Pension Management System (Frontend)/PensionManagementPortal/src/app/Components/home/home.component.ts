import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/Services/TokenService/signup.token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public signupService: SignupService) {}
  FadeOutEffect = '';
  userIsAuth: boolean //for showing error on wrong email used

  onLogin(form: NgForm) {
    if (form.invalid) {
   
      return ;
    }

    this.signupService.SignInMember(form.value.email, form.value.password)
    
    this.signupService.getAuthStatusListener()
    .subscribe((isAuthenticated) => {
      this.userIsAuth = isAuthenticated;
     
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
