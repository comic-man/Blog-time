import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostingComponent } from './post-blog/posting/posting/posting.component';
import { FavoritedComponent } from './post-blog/favorited-posts/favorited/favorited.component';
import { LoginComponent } from './account/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PostBlogComponent,
    SingleViewComponent,
    HomeComponent,
    PostingComponent,
    FavoritedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
