import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AuthorizationService } from '../../services/auth-service/auth-service';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string;
  public password: string;
  public editForm;
  public error: boolean = false;
  public user: string;

  constructor( 
    private _authService: AuthorizationService,
    private router: Router,
    private store: Store<fromStore.State>
  ) {}
  
  login(data: any) {
    // this._authService.login(data);
    // this.router.navigateByUrl('/courses');
    // this.error = this._authService.wrongUser;
    console.log(data, "DATA")
    return this.store.select<any>('store')
      .subscribe(res => {
        this.user = res.auth.users.filter(e => e.email === data.email && e.password === data.password)
        if(this.user.length > 0) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('name', res.name);
          this.router.navigateByUrl('/courses');
        } else {
          this.error = true;
        }
      },
      error => this.error = true);
    }
  
    
  }

