import { Component, OnInit, DoCheck } from '@angular/core';

import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, DoCheck {
    public listCourses: Course[] = [];
    public items: Course[] = [];
    public searchName: string;

    constructor(private _coursesService: CoursesService) {}

    ngOnInit() {
        this.items = this._coursesService.index();
        this.listCourses = this._coursesService.index();
    }

    ngDoCheck() {
        this.items = this._coursesService.index();
    }
  
    findName(value: string) {
        const findNamePipe = new FindByPipe();
        this.items = findNamePipe.transform(this.listCourses, value);
    }
}
