import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/app.config';
import { Course } from '../../models/course/course';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public isAuthenticated: boolean = false;
  userToken: string = "token";
  public users: any;
  public userData: any;
  private modelEndpoint = AppConfig.apiUrl + '/users';
  public wrongUser: boolean =  false;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  login(userData: any) {
    return this.httpClient.post('http://localhost:3000/auth/login', userData)
                          .subscribe((res: any) => {
                            this.isAuthenticated = true;
                            localStorage.setItem('token', res.token);
                            localStorage.setItem('name', res.name);
                            this.router.navigateByUrl('/courses');
                          },
                          (error) => {
                            console.log(error, "eror from login");
                            this.wrongUser = true;
                          })
      
  }

  logout(){
    localStorage.removeItem(this.userToken);
    localStorage.removeItem("name");
    this.isAuthenticated = false;
    this.router.navigateByUrl('/login');
  }

  getUserInfo() {
    return localStorage.getItem(this.userToken);
  }

  getUsers() {
    return this.users = this.httpClient.get(this.modelEndpoint);
  }

  loggedIn() {
    return !!localStorage.getItem(this.userToken);
  }
  
  getUser(token) {
    return this.httpClient.get<Array<any>>(`http://localhost:3000/users?token_like=${token}`);
  }
}
