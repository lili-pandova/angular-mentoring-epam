import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CoursesService } from '../../courses.service';
import { Course, CourseTitle } from '../models/course/course';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
    @Input() public data: Course;
    @Output() public removedID = new EventEmitter();

    constructor(private _coursesService: CoursesService) {}

    ngOnInit() {}

    cancel() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }

    deleteCourse() {
        this.removedID.emit(this.data.id);
        this._coursesService.removeItem(this.data.id);
        // this._coursesService.updateListCourses();
    }
}
