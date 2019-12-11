import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  public title: string = 'New course';
  public show: boolean = false;
  @Output() hideModal  = new EventEmitter<boolean>(); 


  constructor() { }

  addCourse() {
    console.log('Save course');
  }

  cancel() {
    this.hideModal.emit(this.show);
    console.log('Cancel!');
  }

  onSubmit(arg: any) {
    console.log(arg, "arguments")
    console.log("Submit func")
  }

}
