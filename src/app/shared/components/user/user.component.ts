import { Component, OnInit } from "@angular/core";

import { User } from "src/app/shared/models/user/user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  public Users: User[] = [
    {
      id: 1,
      firstName: "Maria",
      lastName: "Ivanova"
    },
    {
      id: 3,
      firstName: "Krasi",
      lastName: "Todorova"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
