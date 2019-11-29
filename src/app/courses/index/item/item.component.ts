import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course, CourseTitle } from '../../../shared/models/course/course';
import { CoursesService } from '../../../courses.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() public data: Course;
    @Output() public takeID = new EventEmitter();

    public listCourses: Course[] = [];

    constructor(private _coursesService: CoursesService) {}

    editCourse() {
        console.log('You clicked the edit-button');
    }

    deleteCourse() {
        this.takeID.emit(this.data.id);
        this._coursesService.openModal(this.data.id);
    }
}
