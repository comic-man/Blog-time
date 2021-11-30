import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup | undefined


  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup ({
      'email': new FormControl('Enter Email'),
      'psw': new FormControl("Enter Password"),
      'psw-repeat': new FormControl("Repeat Password")

    });
  }

}
