import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../services/auth-service/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
 
  constructor(
        private _authService: AuthorizationService,
        private _router: Router
  ) {}
  
  canActivate(): boolean {
    if(this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigateByUrl('/login');
      return false;
    }
  }
}
