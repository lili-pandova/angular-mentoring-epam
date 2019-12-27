import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string;
  public password: string;
  editForm;

  constructor( 
    private _authService: AuthorizationService,
    private router: Router
  ) {}

  login(data: any) {
    this._authService.login(data);
    this.router.navigateByUrl('/courses');
  }

}
