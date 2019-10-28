import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() public data;
  @Output() public childEvent = new EventEmitter();

  constructor() {}
  editCourse(event) {
    console.log("You clicked the edit-button");
  }
  deleteCourse(event) {
    this.childEvent.emit(this.data.id);
  }
  ngOnInit() {}
}
