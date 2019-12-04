import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  editForm;

  @Output() public loginData = new EventEmitter();

  login(userData: any): any{
    this.loginData.emit(userData);
    document.querySelector('#login .close').click();
    console.log("Login successfully");
  }

}