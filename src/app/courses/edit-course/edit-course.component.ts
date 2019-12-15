import { Component, Input, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CoursesService } from '../../shared/services/course-service/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements DoCheck {
  public durationControl = new FormControl();
  public randomId: number = Math.round(Math.random() * 100);
  @Input() itemId: number;

  constructor(private _coursesService: CoursesService) { }


  addCourseForm = new FormGroup({
    randomId: new FormControl(this.randomId),
    title: new FormControl(),
    description: new FormControl(),
    date: new FormControl()
  })

  ngDoCheck() {
    let dataField = this._coursesService.view(this.itemId);
    console.log(dataField, "test");
    this.addCourseForm.setValue({
      randomId: dataField.id,
      title: dataField.title,
      description: dataField.description,
      date: dataField.creationDate
    })
  }

  onSubmit(data: any) {
    this._coursesService.update(this.itemId, data);
  }
}
