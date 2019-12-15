import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  public durationControl = new FormControl();

  public formData: any = [
    'description', 'date', 'name', 'randomId'
  ]

  public show: boolean = false;
  public randomId: number = Math.round(Math.random() * 100);
  public durationData: object;

  @Input() titleModal: string;
  @Output() hideModal = new EventEmitter<boolean>();
  @Output() transferData = new EventEmitter();


  constructor(private _coursesService: CoursesService) { }

  cancel() {
    this.hideModal.emit(this.show);
  }

  onSubmit(fieldsData: any) {
    let data = Object.assign(fieldsData, this.durationData);
    this.transferData.emit(data);
    this.hideModal.emit(this.show);
    this._coursesService.store(fieldsData).subscribe((data) => {
      console.log(data);
    })
  }

  durationField($event) {
    this.durationData = $event;
  }

  addCourseForm = new FormGroup({
    randomId: new FormControl(this.randomId),
    title: new FormControl(),
    description: new FormControl(),
    date: new FormControl()
  })

}
