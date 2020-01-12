import { Component, Input, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/auth-service/auth-service';
import { Course } from '../../models/course/course';


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
