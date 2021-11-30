import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup ({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'psw': new FormControl(null, [Validators.required]),
      'psw-repeat': new FormControl(null, [Validators.required])

    });
    this.signUpForm.valueChanges.subscribe(
      (value) => console.log(value)
    )
  }
    onSubmit() {
      console.log(this.signUpForm);
    }

  }

