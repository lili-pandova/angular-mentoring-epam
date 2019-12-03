import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AuthorizationService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  initialUserData: any = {
    'email': "test@abv.bf",
    'password': "aaaa"
  }
  editForm;

  constructor(private _authService: AuthorizationService) {}

  userLogin = this._authService.login(this.initialUserData);

  onSubmit(userData: any) {
    console.log(userData, "userData")
  }

}
