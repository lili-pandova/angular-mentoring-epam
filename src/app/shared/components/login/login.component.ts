import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthorizationService } from '../../services/auth-service/auth-service';
import * as fromStore from '../../../store/reducers';
import {UserAuthenticationSuccess, UserAuthenticationFail, LoadUserAuthentication} from '../../../store/actions/user.actions';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public email: string;
    public password: string;
    public error: boolean = false;
    public user: string;

    constructor(private _authService: AuthorizationService,
                private router: Router,
                private store: Store<fromStore.State>,
                private loadingService: LoadingService,) {
    }

    login(data: any) {
        return this._authService.login(data)
            .subscribe((res: any) => {
                    this.store.dispatch(new UserAuthenticationSuccess(res));
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('name', res.name);
                    this.router.navigateByUrl('/courses');
                },
                (error) => {
                    console.log(error, 'eror from login');
                    this.loadingService.hide();
                    this.router.navigateByUrl('/login');
                    this.error = true;
                    this.store.dispatch(new UserAuthenticationFail(error));
                })
    }

    ngOnInit() {
        this.loadingService.hide();
    }
}

