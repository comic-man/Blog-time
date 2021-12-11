import { Component, OnInit, } from '@angular/core';
import { UserService } from './account/login/login/users.service';
import { SignUpService } from './account/sign-up/sign-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  accounts: { email:string, status: string}[] = [];
  title = 'Blog-time';
  email: { email: string; status: string; }[] | undefined;

  constructor(private signUpService:SignUpService){}
  ngOnInit(){
    this.accounts = this.signUpService.accounts;
  }
}
