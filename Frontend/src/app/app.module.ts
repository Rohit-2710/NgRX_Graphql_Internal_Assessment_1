import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphqlModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { todoReducer } from 'Store/todo.reducer';
import {StoreModule} from '@ngrx/store'
import { FormsModule } from '@angular/forms';
import { reducers } from '../../Store/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
    UpdateTodoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
