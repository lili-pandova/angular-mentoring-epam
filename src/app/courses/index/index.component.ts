import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { ItemComponent } from './item/item.component';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
    selector: 'app-courses-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
    @ViewChild('appItem', {static: false}) 
    public appItemm: ItemComponent;
    @ViewChild('confirmModal', {static: false}) 
    public confirmModall: ConfirmationModalComponent;

    public listCourses: Course[] = [];
    public items: Course[] = [];
    public searchName: string;
    public show: boolean = false;
    public titleModal: string = '';
    public data: any;
    public editedId;


    constructor(private _coursesService: CoursesService) {}

    ngOnInit() {
        this.items = this._coursesService.index();
        this.listCourses = this._coursesService.index();
    }
  
    findName(value: string) {
        const findNamePipe = new FindByPipe();
        this.items = findNamePipe.transform(this.listCourses, value);
    }

    ngAfterViewInit(){
        this.confirmModall.delete.subscribe(() => {
            this.appItemm.deleteCourse();
            this.appItemm.closeModal();
            this.items = this._coursesService.index();
        });
    }
}
