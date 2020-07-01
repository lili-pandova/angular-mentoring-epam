import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {Course} from '../../../shared/models/course/course';
import {CoursesService} from '../../../shared/services/course-service/courses.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
    @Input() public data: Course;
    @Output() public deleteId = new EventEmitter();

    public show: boolean = false;
    public listCourses: Course[] = [];
    public updatedData: any;
    public itemId: any;


    constructor(
        private _coursesService: CoursesService) {
    }

    openModal(id: any): void {
        if(document.querySelector('.confirmation-modal')) {
            document.querySelector('.confirmation-modal').classList.add('block');
        }

        this.itemId = id;
        this.deleteId.emit(this.itemId);
    }

    closeModal() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }
}
