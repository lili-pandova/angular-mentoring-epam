import { Component, OnInit } from '@angular/core';

import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/courses.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    public listCourses: Course[] = [];
    public items: Course[] = [];
    public searchName: string;

    constructor(private _coursesService: CoursesService) {}

    ngOnInit() {
        this.items = this._coursesService.getList();
        this.listCourses = this._coursesService.getList();
    }

    getItemID(id: number) {
        this._coursesService.getItemById(id);
    }
    removedItem(id: number) {
        this.listCourses = this._coursesService.getList();
        console.log(id, 'this.listCourses %%% '); //should use the id and to call the service
    }

    findName(value: string) {
        const findNamePipe = new FindByPipe();
        this.items = findNamePipe.transform(this.listCourses, value);
    }
}
