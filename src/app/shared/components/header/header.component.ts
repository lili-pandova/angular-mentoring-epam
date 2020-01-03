import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/auth-service/auth-service';
import { Course } from '../../models/course/course';
import { async } from 'q';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(
        private _authService: AuthorizationService,
        private httpClient: HttpClient,
        private router: Router
    ) {}

    
    loginData(data: any) {
        this._authService.login(data);
    }
}
