import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'post-blog', component:PostBlogComponent},
  {path:'single-view', component:SingleViewComponent},
  {path:'sign-in', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
