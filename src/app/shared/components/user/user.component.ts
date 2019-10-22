import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public listUsers: User[] = [
    {
      id: 1,
      firstName: 'Maria',
      lastName: 'Ivanova'
    },
    {
      id: 3,
      firstName: 'Krasi',
      lastName: 'Todorova'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
