import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthorizationService } from '../../services/auth-service/auth-service';
import * as fromStore from '../../../store/reducers';
import { UserAuthenticationSuccess, UserAuthenticationFail } from '../../../store/actions/user.actions';
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
    public loginForm: FormGroup;
    private fb: FormBuilder;

    constructor(private _authService: AuthorizationService,
                private router: Router,
                private store: Store<fromStore.State>,
                private loadingService: LoadingService,) {
    }

    onSubmit() {
        const data = this.loginForm.value;
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

        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    close() {
        let token = localStorage.getItem('token');
        if (token) {
            this.router.navigateByUrl('/courses');
        } else {
            this.router.navigateByUrl('/login');
        }
    }

}

