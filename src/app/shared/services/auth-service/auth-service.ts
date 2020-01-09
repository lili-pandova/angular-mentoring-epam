import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public isAuthenticated: boolean = false;
  user: string = "user";

  constructor() { }

  login(userData: any){
    localStorage.setItem(this.user, JSON.stringify(userData));
    this.isAuthenticated = true;
  }

  logout(){
    localStorage.removeItem(this.user);
    this.isAuthenticated = false;
  }

  getUserInfo() {
    return localStorage.getItem(this.user);
  }
}
