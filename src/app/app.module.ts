import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpPostsComponent } from './http-posts/http-posts.component';
import { AppErrorHandler } from './validators/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TaskmanagerFormComponent } from './taskmanager-form/taskmanager-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpService } from './services/http.service';
import { GithubFollowersService } from './services/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ContactFormComponent,
    SignupFormComponent,
    TaskmanagerFormComponent,
    HttpPostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'',component: HomeComponent },
      { path:'followers', component: GithubFollowersComponent },
      { path:'followers/:id/:username', component: GithubProfileComponent },
      { path:'posts', component: HttpPostsComponent },
      { path:'contact-form', component: ContactFormComponent },
      { path:'signup-form', component: SignupFormComponent },
      { path:'taskmanager-form', component: TaskmanagerFormComponent },
      { path:'like', component: LikeComponent },
      { path:'**', component: NotFoundComponent }
    ])
  ],
  providers: [
    HttpService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

