import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../../shared/models/course/course';
import { FindByNamePipe } from '../../../shared/pipes/find-by-name.pipe';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    declarations: [ FindByNamePipe ]
})
export class ItemComponent {
    @Input() public data: Course;
    @Input() public topRated: boolean;
    @Output() public delete = new EventEmitter();

    constructor() {}

    editCourse() {
        console.log('You clicked the edit-button');
    }

    deleteCourse() {
        this.delete.emit(this.data.id);
    }

    findName (value: string) {
        //const arr = ['Lorem', 'Ipsum', 'Test'];
        console.log(value, "value22");
        let findName = new FindByNamePipe();
        findName.transform(value);
    }
}
