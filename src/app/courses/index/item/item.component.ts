import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course, CourseTitle } from '../../../shared/models/course/course';
import { FindByNamePipe } from '../../../shared/pipes/find-by-name.pipe';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() public data: Course;
    @Input() public searchName: string;
    @Output() public delete = new EventEmitter();

    public findByNamePipeString: CourseTitle[];
    constructor(private findByNamePipe: FindByNamePipe) {}

    editCourse() {
        console.log('You clicked the edit-button');
    }

    deleteCourse() {
        this.delete.emit(this.data.id);
    }
}
