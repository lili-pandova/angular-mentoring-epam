import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private isAuthenticated: boolean;

  constructor() { }
  login(){}
  logout(){}
  getUserInfo() {}
}
