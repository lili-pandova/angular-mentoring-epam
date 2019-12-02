import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { Course, CourseTitle } from '../../../shared/models/course/course';
import { CoursesService } from '../../../courses.service';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() public data: Course;

    @ViewChild('confirmModal', {static: false}) 
    public confirmModall: ConfirmationModalComponent;


    public listCourses: Course[] = [];

    constructor(private _coursesService: CoursesService) {}

    editCourse() {
        console.log('You clicked the edit-button');
        this._coursesService.update(this.data.id, this.data)
    }

    deleteCourse() {
        this.openModal(this.data.id)
        this.confirmModall.delete.subscribe(() => {
            this._coursesService.destroy(this.data.id);
            this.closeModal(this.data.id);
        })
    }

    openModal(id: number) {
        document.querySelector('.confirmation-modal').classList.add('block');
    }

    closeModal(id: number) {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }
}
