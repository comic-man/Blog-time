import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [LoggingService]
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  @Output () accountAdded = new EventEmitter <{email: string, status: string}>();

  onCreateAccount( accountEmail:string, accountStatus:string){
    this.accountAdded.emit({
      email:accountEmail,
      status:accountStatus
    });
    //this.loggingService.logStatusChange(accountStatus);
  }

  constructor(private loggingService:LoggingService) { }

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

