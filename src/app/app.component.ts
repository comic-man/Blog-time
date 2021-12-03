import { Component, OnInit, } from '@angular/core';
import { SignUpService } from './account/sign-up/sign-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accounts: { email:string, status: string}[] = [];
  title = 'Blog-time';

  constructor(private signUpService:SignUpService){}
  ngOnInit(){
    this.accounts = this.signUpService.accounts;
  }
}
