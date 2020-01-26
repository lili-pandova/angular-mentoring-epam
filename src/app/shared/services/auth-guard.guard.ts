import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> {
    return new Observable((obs: any) => {
      let token = localStorage.getItem('token');
      if (!token) {
        obs.next(false);
        this.router.navigateByUrl('/login');
      } else {
        obs.next(true);
      }

      obs.complete();
    })
  }
}
