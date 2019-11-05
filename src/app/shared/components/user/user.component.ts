import { Component } from '@angular/core';

import { User } from 'src/app/shared/models/user/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    public Users: User[] = [
        {
            id: 1,
            firstName: 'Maria',
            lastName: 'Ivanova'
        },
        {
            id: 3,
            firstName: 'Krasi',
            lastName: 'Todorova'
        }
    ];
    constructor() {}
}
