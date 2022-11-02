import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Todo } from './Entity/Todo';
import { TodoReducer } from './reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({Todo:TodoReducer}),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
