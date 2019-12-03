import { Component, Input } from '@angular/core';

import { AuthorizationService } from '../../services/auth-service/auth-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private _authService: AuthorizationService) {}

    loginData(data: any) {
        this._authService.login(data)
    }
    
}
