import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';

import { AuthorizationService } from '../../services/auth-service/auth-service';
import * as fromStore from '../../../store/reducers';
import {UserAuthenticationFail} from '../../../store/actions/user.actions';

@Component({
    selector: 'app-user-log',
    templateUrl: './user-log.component.html',
    styleUrls: ['./user-log.component.scss']
})
export class UserLogComponent implements OnInit, DoCheck {
    public isAuthenticated: boolean;
    public userInfo;

    constructor(
        private _authService: AuthorizationService,
        private router: Router,
        private store: Store<fromStore.State>
    ) {}

    ngOnInit() {
        this.userInfo = this._authService.getUserInfo();
    }

    ngDoCheck() {
        if(this._authService.loggedIn()) {
            return this.isAuthenticated = true;
        }
    }

    logOff() {
        this._authService.logout();
        this.isAuthenticated = false;
        this.store.dispatch(new UserAuthenticationFail('logOut'));
    }
}
