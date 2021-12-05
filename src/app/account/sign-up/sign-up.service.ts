import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  email: { email: string; status: string; }[] | undefined;
  accounts:{ account: string; status: string; }[] | undefined|undefined;

  constructor() { }
}
