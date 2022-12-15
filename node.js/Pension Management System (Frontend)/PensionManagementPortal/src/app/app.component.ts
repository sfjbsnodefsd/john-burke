import { Component,OnInit } from '@angular/core';
import { SignupService } from './Services/TokenService/signup.token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PensionManagementPortal';

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.AutoCheckToken();
  }




}


