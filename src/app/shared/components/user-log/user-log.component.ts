import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/auth-service/auth-service';

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
        private router: Router
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
    }
}
