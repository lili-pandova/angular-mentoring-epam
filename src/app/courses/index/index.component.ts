import { Component, OnInit, ViewChild, AfterViewInit, DoCheck } from '@angular/core';

import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { ItemComponent } from './item/item.component';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { LoadMoreComponent } from 'src/app/shared/components/load-more/load-more.component';

@Component({
    selector: 'app-courses-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit, DoCheck {
    @ViewChild('appItem', {static: false}) 
    public appItemm: ItemComponent;
    @ViewChild('confirmModal', {static: false}) 
    public confirmModall: ConfirmationModalComponent;

    public listCourses;
    public items: Course[];
    public searchName: string;
    public titleModal: string = '';
    public data: any;
    public editedId;


    constructor(private _coursesService: CoursesService) {}

    ngOnInit() {
        this._coursesService.index().subscribe(res => this.items = res,
                                               error => console.log(error));
        this._coursesService.index().subscribe(res => this.listCourses = res,
                                               error => console.log(error));
    }
  
    findName(value: string) {
        const findNamePipe = new FindByPipe();  
        this._coursesService.findCourse(value).subscribe(res => this.items = findNamePipe.transform(res, value),
                                                        error => console.log(error));
    }

    ngAfterViewInit(){
        this.confirmModall.delete.subscribe(() => {
            this.appItemm.deleteCourse();
            this.appItemm.closeModal();
            this.items = this._coursesService.index();
        });
    }

    addMore() {
        this._coursesService.incrementCount();
        this._coursesService.index().subscribe(res => this.items = res,
                                                      error => console.log(error));
    }
}
