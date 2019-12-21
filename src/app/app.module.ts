import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { fakeBackendProvider } from './common/auth-helpers/fake-backend';
import { JwtInterceptor } from './common/auth-helpers/jwt.interceptor';
import { ErrorInterceptor } from './common/auth-helpers/error.interceptor';


import { HttpPostsComponent } from './http-posts/http-posts.component';
import { AppErrorHandler } from './common/validators/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TaskmanagerFormComponent } from './taskmanager-form/taskmanager-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AlertComponent } from './common/auth-helpers/alert.component';

import { HttpService } from './http-posts/http.service';
import { GithubFollowersService } from './github-followers/github-followers.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    LikeComponent,
    ContactFormComponent,
    TaskmanagerFormComponent,
    HttpPostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    SignupFormComponent,
    LoginFormComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
],
bootstrap: [AppComponent]
})
export class AppModule { };
