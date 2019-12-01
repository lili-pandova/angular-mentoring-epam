import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CoursesService } from '../../courses.service';
import { Course, CourseTitle } from '../models/course/course';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
    constructor(private _coursesService: CoursesService) {}

    ngOnInit() {}

    cancel() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }

    deleteCourse() {
        console.log("Delete courses on click")
        this._coursesService.getList();
        this._coursesService.removeItem();
    }
}
