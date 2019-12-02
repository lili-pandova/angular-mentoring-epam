import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private isAuthenticated: boolean;

  constructor() { }
  login(){
    const asd = {
      name: 'asd',
      email: 'asd',
      token: 'asd'
    };

    localStorage.setItem('user', JSON.stringify(asd));
  }

  logout(){
    localStorage.removeItem('user');
  }
  getUserInfo() {}
}
