import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  email: { email: string; status: string; }[] | any;
  accounts:{ account: string; status: string; }[] | any;

  constructor() { }
}
