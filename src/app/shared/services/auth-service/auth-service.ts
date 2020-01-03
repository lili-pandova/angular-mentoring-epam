import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public isAuthenticated: boolean = false;
  user: string = "user";
  public users: any;
  public userData: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  // login(userData: any){
  //    localStorage.setItem(this.user, JSON.stringify(userData));
  //    this.isAuthenticated = true;
  // }

  login(userData: any) {
    console.log(userData, "userdata")
    return this.httpClient.post('http://localhost:3000/users', userData) //add endPoint
                          .subscribe(res => {
                            this.isAuthenticated = true;
                            localStorage.setItem('token', "fake Token"); //add Token
                            this.router.navigateByUrl('/courses');
                          })
      
  }

  logout(){
    localStorage.removeItem(this.user);
    this.isAuthenticated = false;
  }

  getUserInfo() {
    return localStorage.getItem(this.user);
  }

  getUsers() {
    return this.users = this.httpClient.get('http://localhost:3000/users');
  }

  getUser(userData) {
    // return this.httpClient.get(`http://localhost:3000/users?email_like=${userData.email}&password_like=${userData.password}`) 
    // .subscribe(res => res);
  }
}
