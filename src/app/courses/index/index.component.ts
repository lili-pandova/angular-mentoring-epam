import {
    ConfirmationModalComponent
} from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../shared/services/auth-service/auth-service';
import { ItemComponent } from './item/item.component';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import {LoadingService} from '../../shared/services/loading.service';
import {
    DeleteCourseFail,
    DeleteCourseSuccess,
    GetAllCourse,
    GetAllCoursesFail,
    GetAllCourseSuccess
} from '../../store/actions/courses.action';

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
    public data: any;
    public itemId;

    constructor(
        private _coursesService: CoursesService,
        private _authService: AuthorizationService,
        private _router: Router,
        private _store: Store<fromStore.State>,
        private _loadingService: LoadingService
    ) {}


    ngOnInit() {
        this._coursesService.index().subscribe(res => {
                                                this.items = res;
                                                this.listCourses = res;
                                                this._store.dispatch(new GetAllCourseSuccess(res));
                                            },
                                          error => {
                                                console.log(error);
                                                this._store.dispatch(new GetAllCoursesFail(error));
                                            });
    }

    findName(value: string) {
        const findNamePipe = new FindByPipe();
        this._coursesService.findCourse(value).subscribe(res => {
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
                                                                this._store.dispatch(new DeleteCourseSuccess(this.itemId));
                                                                },
                                                                error => this._store.dispatch(new DeleteCourseFail(error)));

            this._store.dispatch(new GetAllCourse())
            this._coursesService.index().subscribe(res => {
                                                    this.items = res},
                                                    error => console.log(error));
        });
    }

    addMore() {
        this._coursesService.incrementCount();
            this._coursesService.index().subscribe(res => {
                                                    this.items = res},
                                                    error => console.log(error));
    }
}
