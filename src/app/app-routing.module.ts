import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HttpPostsComponent } from './http-posts/http-posts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TaskmanagerFormComponent } from './taskmanager-form/taskmanager-form.component';
import { LikeComponent } from './like/like.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = 
[
  { path:'',component: HomeComponent },
  { path:'followers', component: GithubFollowersComponent },
  { path:'followers/:id/:username', component: GithubProfileComponent },
  { path:'posts', component: HttpPostsComponent },
  { path:'contact-form', component: ContactFormComponent },
  { path:'login-form', component: LoginFormComponent },
  { path:'signup-form', component: SignupFormComponent },
  { path:'taskmanager-form', component: TaskmanagerFormComponent },
  { path:'like', component: LikeComponent },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
