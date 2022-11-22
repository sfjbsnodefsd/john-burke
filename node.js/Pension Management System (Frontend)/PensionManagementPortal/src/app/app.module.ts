import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PensionPageComponent } from './Components/pension-page/pension-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AuthInterceptor } from './Services/Auth/auth-interceptor';
import { EditPensionerComponent } from './Components/edit-pensioner/edit-pensioner.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PensionPageComponent,
    SearchPageComponent,
    SignUpComponent,
    EditPensionerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
 
  ],
  //for auth token, set that "multi: true" so that we dont override existing interceptors
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
