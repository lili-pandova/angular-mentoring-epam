import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public isAuthenticated: boolean = false;
  userToken: string = "token";
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
    return this.httpClient.post('http://localhost:3000/users', userData)
                          .subscribe((res: any) => {
                            this.isAuthenticated = true;
                            localStorage.setItem('token', res.token);
                            this.router.navigateByUrl('/courses');
                          })
      
  }

  logout(){
    localStorage.removeItem(this.userToken);
    this.isAuthenticated = false;
  }

  getUserInfo() {
    return localStorage.getItem(this.userToken);
  }

  getUsers() {
    return this.users = this.httpClient.get('http://localhost:3000/users');
  }

  loggedIn() {
    return !!localStorage.getItem(this.userToken);
  }
  
  getUser(userData) {
    return this.httpClient.get(`http://localhost:3000/users?email_like=${userData.email}&password_like=${userData.password}`) 
                          .subscribe(res => res,
                                     error => console.log(error));//da mahna subscribe
  }
}
