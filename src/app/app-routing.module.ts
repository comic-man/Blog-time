import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:'Home', component:AppComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'post-blog', component:PostBlogComponent},
  {path:'single-view', component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
