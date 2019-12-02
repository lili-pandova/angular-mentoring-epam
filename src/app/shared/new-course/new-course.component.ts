import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Course, CourseTitle } from '../models/course/course';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  @Input() public data: Course;
  editForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editForm = new FormControl({
      title: new FormControl('', {
        updateOn: 'submit'
      }),
      description: new FormControl('', {
        updateOn: 'submit'
      }),
      duration: new FormControl('', {
        updateOn: 'submit'
      }),
      creationDate: new FormControl('', {
        updateOn: 'submit'
      }),
    });

  }

  onSubmit(args) {
    console.log(args, "args from submit");
  }
}
