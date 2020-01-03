import { Component, EventEmitter, Output } from '@angular/core';

import { CoursesService } from '../../services/course-service/courses.service';
import { Course } from '../../models/course/course';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    @Output() public searchName = new EventEmitter();
    public searchedCourse: Course[];

    constructor(private _coursesService: CoursesService) {}

    findName(value: string) {
        this.searchName.emit(value);
        //this._coursesService.findCourse(value).subscribe(res => console.log(res, "REsponse from search"));
    }
}
