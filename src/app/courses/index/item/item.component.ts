import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnChanges {
  @Input() public data;
  @Output() public childEvent = new EventEmitter();

  constructor() {}
  editCourse() {
    console.log('You clicked the edit-button');
  }
  deleteCourse() {
    this.childEvent.emit(this.data.id);
  }
  ngOnChanges(changes: SimpleChanges) {
    // Playing with OnChange hook
    const courses = changes.data;
  }
}
