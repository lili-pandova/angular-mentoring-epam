import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(args) {
    console.log(args, "args from submit");
  }
}
