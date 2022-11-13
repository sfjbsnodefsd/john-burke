import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/Services/TokenService/signup.token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription
  userIsAuth = false
  
  //service for token auth
  constructor(public signupService: SignupService) { }

  //clear token and status
  onlogout(){
    this.signupService.logout()
  }


  ngOnInit(): void {
    this.authListenerSubs = this.signupService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuth = isAuthenticated

    })
  }

  ngOnDestroy(){


  }


}
