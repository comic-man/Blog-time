import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './account/sign-up/sign-up.service';
import { LoggingService } from './account/sign-up/logging.service';
import { AuthGaurd } from './auth-guard.service';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [SignUpService, LoggingService, AuthGaurd, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
