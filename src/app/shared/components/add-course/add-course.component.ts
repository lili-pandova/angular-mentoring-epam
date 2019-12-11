import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  public title: string = 'New course';
  public show: boolean = false;
  public randomId: number = Math.random() * 10;
  @Output() hideModal  = new EventEmitter<boolean>(); 
  @Output() transferData  = new EventEmitter(); 


  constructor() { }

  cancel() {
    this.hideModal.emit(this.show);
    console.log('Cancel!');
  }

  onSubmit(fieldsData: any) {
    console.log(fieldsData, "Submit func");
    this.transferData.emit(fieldsData);
    this.hideModal.emit(this.show);
  }

}
