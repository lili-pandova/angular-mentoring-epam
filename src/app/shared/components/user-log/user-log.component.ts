import { Component, DoCheck, OnInit } from '@angular/core';

import { AuthorizationService } from '../../services/auth-service/auth-service';

@Component({
    selector: 'app-user-log',
    templateUrl: './user-log.component.html',
    styleUrls: ['./user-log.component.scss']
})
export class UserLogComponent implements OnInit, DoCheck {
    public isAuthenticated: boolean;
    public userInfo;

    constructor(private _authService: AuthorizationService) {}

    ngOnInit() {
        this.userInfo= this._authService.getUserInfo();
    }

    ngDoCheck() {
        this.isAuthenticated = this._authService.isAuthenticated;
    }

    logOff() {
        this._authService.logout();
    }
}
