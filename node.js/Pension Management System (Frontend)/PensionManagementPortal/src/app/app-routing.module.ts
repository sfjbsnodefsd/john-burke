import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PensionPageComponent } from './Components/pension-page/pension-page.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = 
[
  {path :"", component:HomeComponent},
  {path :"Pension", component:PensionPageComponent},
  {path :"SearchPage", component:SearchPageComponent},
  {path: "SignUp", component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
