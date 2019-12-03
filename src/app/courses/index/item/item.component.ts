import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { Course, CourseTitle } from '../../../shared/models/course/course';
import { CoursesService } from '../../../shared/services/course-service/courses.service';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { NewCourseComponent } from '../../../shared/new-course/new-course.component';

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
    public updatedData: any;
    public itemId: any;

    constructor(private _coursesService: CoursesService) {}

    editCourse($event) {
        this.itemId = $event;
        console.log(this.itemId, 'You clicked the edit-button');
    }

    receiveData($event) {
        this.updatedData = $event;
        console.log(this.updatedData, "message");
        console.log(this.itemId, "message this.data.id undefined????");
        this._coursesService.update(this.itemId, this.updatedData);
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
