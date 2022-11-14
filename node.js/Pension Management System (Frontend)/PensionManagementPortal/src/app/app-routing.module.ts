import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PensionPageComponent } from './Components/pension-page/pension-page.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AuthGuard } from './Services/Auth/auth-guard.service';

const routes: Routes = 
[
  {path :"login", component:HomeComponent},
  {path :"Pension", component:PensionPageComponent,  },
  {path :"SearchPage", component:SearchPageComponent, canActivate:[AuthGuard] },
  {path: "SignUp", component:SignUpComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthGuard]
})
export class AppRoutingModule { }
