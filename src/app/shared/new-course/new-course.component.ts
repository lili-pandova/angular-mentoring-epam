import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Course } from '../models/course/course';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent {
  @Input() public data: Course;
  @Output() public updateData = new EventEmitter();
  editForm;

  constructor(private _coursesService: CoursesService) {}
  newCourseModel = this._coursesService.index();

  onSubmit(updatedData: any) {
    console.log(updatedData, "updatedData from submit");
    this.updateData.emit(updatedData);
  }
}
