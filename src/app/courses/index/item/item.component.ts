import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../../shared/models/course/course';
import { CoursesService } from '../../../shared/services/course-service/courses.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
    @Input() public data: Course;

    public show: boolean = false;
    public listCourses: Course[] = [];
    public updatedData: any;
    public itemId: number;


    constructor(
        private _coursesService: CoursesService) {}

    deleteCourse() {
        console.log(this.itemId, "this.itemId3333");
        this._coursesService.destroy(this.itemId);
    }

    openModal($event: any) {
        document.querySelector('.confirmation-modal').classList.add('block');
        this.itemId = this.data.id;
    }

    closeModal() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }
}
