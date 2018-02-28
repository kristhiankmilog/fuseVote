import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchGameListPageComponent} from './pages/searchGame-list-page/searchGame-list-page.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewGameService } from './services/newGame.service';
import { HttpModule } from '@angular/http';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';
import { RegisterComponent } from './pages/register-page/register-page.component';
import { ContentGamesComponent } from './pages/content-games/content-games.component';
import { CommentsReviewComponent } from './pages/comments-review/comments-review.component';

import { DescriptionGameService } from './services/descriptionGame.service';


const ROUTES = [
    { path: '', component: HomePageComponent },

    { path: 'signin', component: SignInPageComponent },
    { path: 'searchGames', component: SearchGameListPageComponent},
    {path: 'register' , component: RegisterComponent},

    { path: 'home', component: HomePageComponent },

  {
    path: 'users', component: UserListPageComponent,

  },
  {
    path: 'editUsers', component: UserEditPageComponent ,
    canActivate: [AuthService],
  },
  {
    path: 'searchGame', component: SearchGameListPageComponent ,

  },

  {
      path: 'contentGames', component: ContentGamesComponent ,

    },


  {

    path: 'comments', component: CommentsComponent ,

  },
    {
      path: 'commentsreview', component: CommentsReviewComponent ,

    },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      SearchGameListPageComponent,
      CommentsComponent,
      CommentsReviewComponent,
      PageNotFoundComponent,
      SignInPageComponent,
      UserEditPageComponent,
      UserListPageComponent,
      RegisterComponent,
      ContentGamesComponent,
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
    NewGameService,
    CommentsService,
    AuthService,
    AppDataService,
    UsersService,
    DescriptionGameService, 
    AppConfiguration],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
