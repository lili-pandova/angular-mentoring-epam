import { Component, EventEmitter, Output } from '@angular/core';

import { CoursesService } from '../../services/course-service/courses.service';
import { Course } from '../../models/course/course';
import { Observable } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    @Output() public searchName = new EventEmitter();
    public searchedCourse: Course[];

    constructor(private _coursesService: CoursesService) {}

    findName(value) {
        const observable = new Observable<any>(subscriber => {
             subscriber.next(value);
        })
        observable.pipe(filter<any>(text => text.length > 3),
                        debounceTime(3000))
                        .subscribe(res => {
                            this.searchName.emit(res);},
                            error => console.log(error));
    }
  
}
