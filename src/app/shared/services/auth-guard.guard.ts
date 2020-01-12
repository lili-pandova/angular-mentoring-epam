import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthorizationService } from '../services/auth-service/auth-service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  // canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> {
  //   console.log(this._authService.loggedIn(), "this._authService.loggedIn()")
  //   let token = localStorage.getItem('token');
  //   this._authService.getUser(token).pipe(
  //     map(e => {
  //       if (e) {
  //         return true;
  //       }
  //     }),
  //     catchError(err => {
  //       this._router.navigate(['/login']);
  //       return false;
  //     })
  //   );
    
  // }  
  

}
