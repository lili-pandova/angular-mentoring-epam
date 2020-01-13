import { User } from 'src/app/shared/models/user/user';

import { Component } from '@angular/core';

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
