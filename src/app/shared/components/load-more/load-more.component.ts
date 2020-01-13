import { Component, EventEmitter, Output } from '@angular/core';

import { CoursesService } from '../../services/course-service/courses.service';

@Component({
    selector: 'app-load-more',
    templateUrl: './load-more.component.html',
    styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
    @Output() public load = new EventEmitter();
    constructor(private _coursesService: CoursesService) {}

    loadMore(event) {
        this.load.emit(true);
    }
}
