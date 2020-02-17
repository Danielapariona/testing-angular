import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

import { TodosComponent } from './IntegrationTesting/2-todos/todos.component';
import { UserDetailsComponent } from './IntegrationTesting/3-user-details/user-details.component';
import { VoterComponent } from './IntegrationTesting/1-voter/voter.component';

import { UsersComponent } from './IntegrationTesting/users/users.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './IntegrationTesting/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
