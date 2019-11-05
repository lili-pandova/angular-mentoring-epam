import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges
} from '@angular/core';

import { Course } from '../../../shared/models/course/course';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() public data: Course;
    @Output() public delete = new EventEmitter();

    constructor() {}

    editCourse() {
        console.log('You clicked the edit-button');
    }

    deleteCourse() {
        this.delete.emit(this.data.id);
    }
}
