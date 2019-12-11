import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { Course, CourseTitle } from '../../../shared/models/course/course';
import { CoursesService } from '../../../shared/services/course-service/courses.service';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
    @Input() public data: Course;

    public listCourses: Course[] = [];
    public updatedData: any;
    public itemId: number;

    constructor(
        private _coursesService: CoursesService) {}

    editCourse($event: any) {
        this.itemId = this.data.id;
        this._coursesService.update(this.itemId, {});
    }

    deleteCourse() {
        this._coursesService.destroy(this.data.id);
    }

    openModal() {
        document.querySelector('.confirmation-modal').classList.add('block');
    }

    closeModal() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }
}
