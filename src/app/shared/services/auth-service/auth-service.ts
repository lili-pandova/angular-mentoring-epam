import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store} from '@ngrx/store';

import { Course } from '../../models/course/course';
import { LoadingService } from '../loading.service';
import { map } from 'rxjs/operators';
import * as fromStore from '../../../store/reducers';

import { UserAuthenticationSuccess, UserAuthenticationFail, LoadUserAuthentication } from '../../../store/actions/user.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    public isAuthenticated: boolean = false;
    userToken: string = AppConfig.userToken;
    public users: any;
    public userData: any;
    private modelEndpoint = AppConfig.apiUrl + '/users';
    public wrongUser: boolean = false;

    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private loadingService: LoadingService,
        private store: Store<fromStore.State>) {
    }

    login(userData: any) {
        this.loadingService.show();

        return this.httpClient.post('http://localhost:3000/auth/login', userData)
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }))
    }

    logout() {
        localStorage.removeItem(this.userToken);
        localStorage.removeItem('name');
        this.isAuthenticated = false;
        this.router.navigateByUrl('/login');
    }

    getUserInfo() {
        this.loadingService.show();

        return localStorage.getItem(this.userToken)
    }

    getUsers() {
        this.loadingService.show();

        return this.users = this.httpClient.get(this.modelEndpoint)
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }))
    }

    loggedIn() {
        return !!localStorage.getItem(this.userToken);
    }

    getUser(token) {
        this.loadingService.show();

        return this.httpClient.get<Array<any>>(`http://localhost:3000/users?token_like=${token}`)
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }))
    }
}
