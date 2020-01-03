import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string;
  public password: string;
  editForm;

  @Output() public loginData = new EventEmitter();

  constructor() {}

  login(userData: any): any{
    this.loginData.emit(userData);
    let element: HTMLElement = document.getElementsByClassName('close')[0] as HTMLElement;
    element.click();
  }

}
