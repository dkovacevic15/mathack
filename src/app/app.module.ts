import { TeamsComponent } from './team/teams/teams.component';
import { AuthService } from './services/auth.service';
import { ModelService } from './services/model.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TeamspageComponent } from './teamspage/teamspage.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const appRoutes: Routes =
[
  { path: 'home',   component: LandingpageComponent },
  { path: 'signup', component: LandingpageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'teams',  component: TeamspageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    TeamspageComponent,
    SignupComponent,
    SigninComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2AutoCompleteModule
  ],
  providers: [
    ModelService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
