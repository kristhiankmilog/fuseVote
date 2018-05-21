import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';



import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { UsersService } from './services/users.service';
import { RegisterComponent } from './pages/register-page/register-page.component';
import { AddCandidateComponent } from './pages/add-candidate-page/add-candidate-page.component';
import { AddProposalComponent } from './pages/add-info-proposal-page/add-info-proposal-page.component';


const ROUTES = [
    { path: '', component: HomePageComponent },

    { path: 'signin', component: SignInPageComponent },

    { path: 'register', component: SignInPageComponent },

    { path: 'NewCandidate', component: AddCandidateComponent },
     
    {path: 'UpdateInfo' , component: AddProposalComponent},

    {path: 'Vote' , component: RegisterComponent},

    { path: 'home', component: HomePageComponent },
  
  
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      PageNotFoundComponent,
      SignInPageComponent,
      AddCandidateComponent,
      AddProposalComponent,  
      RegisterComponent
      
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    
    
    AuthService,
    AppDataService,
    UsersService,
    
    AppConfiguration],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
