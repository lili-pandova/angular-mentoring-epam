import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private isAuthenticated: boolean;
  user: string = "user";

  constructor() { }
  login(obj: any){
    const asd = {
      name: 'Ivan',
      email: 'ivan@gmail.com',
      token: 'asd1dd'
    };

    localStorage.setItem(this.user, JSON.stringify(obj));
  }

  logout(){
    localStorage.removeItem(this.user);
  }
  getUserInfo() {
    localStorage.getItem(this.user);
  }
}
