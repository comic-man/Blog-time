import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostBlogComponent } from './post-blog/post-blog.component';

import { SignUpComponent } from './account/sign-up/sign-up.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { AuthGaurd } from './auth-guard.service';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'sign-up', canActivate:[AuthGaurd], component:SignUpComponent},
  {path:'post-blog', component:PostBlogComponent},
  {path:'single-view', component:SingleViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
