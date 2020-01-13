import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor() { }

  canActivate(): Observable<boolean> {
    return new Observable((obs: any) => {
      let token = localStorage.getItem('token');
      if (!token) {
        obs.next(false);
      } else {
        obs.next(true);
      }

      obs.complete();
    })
  }
}
