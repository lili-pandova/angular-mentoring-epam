import { Component, Input } from '@angular/core';

import { Course } from '../models/course/course'
import { FindByNamePipe } from '../../pipes/find-by-name.pipe';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    declarations: [ FindByNamePipe ]
})
export class SearchComponent {
 @Input() public data: Course;
    constructor() {
       // let findName = new FindByNamePipe();
    }

    findName (value: string) {
    const arr = ['Lorem', 'Ipsum', 'Test'];
        console.log(value, "value22");
        let findName = new FindByNamePipe();
        //console.log(findName.transform(arr, value))
    }
}
