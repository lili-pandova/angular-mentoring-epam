import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../models/course/course';
import { AuthorizationService } from '../../services/auth-service/auth-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{
    public user: string;

    constructor(
        private _authService: AuthorizationService,
        private httpClient: HttpClient,
        private router: Router
    ) {}

    ngDoCheck() {
        this.user = localStorage.getItem('name');
    }
}
