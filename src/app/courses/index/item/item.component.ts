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

    public show: boolean = true;
    public listCourses: Course[] = [];
    public updatedData: any;
    public itemId: number;
    @Output() showModal  = new EventEmitter(); 
    @Output() editId  = new EventEmitter(); 


    constructor(
        private _coursesService: CoursesService) {}

    editCourse($event: any) {
        console.log($event, "Edit")
        this.itemId = this.data.id;
        this._coursesService.update(this.itemId, {});
        this.showModal.emit(this.show);
        this.editId.emit(this.data.id);
    }

    deleteCourse() {
        console.log(this.itemId, "this.itemId3333");
        this._coursesService.destroy(this.itemId);
    }

    openModal($event: any) {
        console.log(this.data.id, "this.itemId111")
        document.querySelector('.confirmation-modal').classList.add('block');
        this.itemId = this.data.id;
    }

    closeModal() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }
}
