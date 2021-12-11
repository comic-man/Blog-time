import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { SignUpService } from "./account/sign-up/sign-up.service";

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private signUpService: SignUpService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    return this.signUpService.isAuthenticated()
      .then(
        authenticated); {
        }

  }
}

function authenticated(authenticated: any): boolean | Observable<boolean> | Promise<boolean> {
  throw new Error("Function not implemented.");
}

