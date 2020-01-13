
import {
    ConfirmationModalComponent
} from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { LoadMoreComponent } from 'src/app/shared/components/load-more/load-more.component';
import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../shared/services/auth-service/auth-service';
import { LoadingService } from '../../shared/services/loading.service';
import { ItemComponent } from './item/item.component';

@Component({
    selector: 'app-courses-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit, AfterViewInit {
    @ViewChild('appItem', {static: false}) 
    public appItem: ItemComponent;
    @ViewChild('confirmModal', {static: false}) 
    public confirmModall: ConfirmationModalComponent;

    public listCourses;
    public items: Course[];
    public searchName: string;
    public titleModal: string = '';
    public data: any;
    public editedId;
    public itemId;
    public isAuth: boolean;
    public loadingBlock: boolean = true;

    constructor(
        private _coursesService: CoursesService,
        private _authService: AuthorizationService,
        private _router:Router,
        private _loading: LoadingService,
    ) {}


    ngOnInit() {
        this._coursesService.index().subscribe(res => {
                                               this.items = res},
                                               error => console.log(error));
        this._coursesService.index().subscribe(res => {
                                               this.listCourses = res},
                                               error => console.log(error));
    }
  
    findName(value: string) {
        const findNamePipe = new FindByPipe();  
        this._coursesService.findCourse(value).subscribe(res => { 
                                                this.loadingBlock = true;
                                                this.items = findNamePipe.transform(res, value)},
                                                error => console.log(error));
    }

    deleteId(id) {
        return this.itemId = id;
    }

    ngAfterViewInit(){
        this.confirmModall.delete.subscribe(() => {
            this.appItem.closeModal();

            this._coursesService.destroy(this.itemId).subscribe(res => {
                                                                res
                                                                this.loadingBlock = true;
                                                                },
                                                                error => console.error(error));
            this._coursesService.index().subscribe(res => {
                                                    this.loadingBlock = true;
                                                    this.items = res},
                                                    error => console.log(error));
        });
    }

    addMore() {
        this._coursesService.incrementCount();
        this._coursesService.index().subscribe(res => {
                                                this.loadingBlock = true;
                                                this.items = res},
                                                error => console.log(error));
    }
}
