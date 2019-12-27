import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { ItemComponent } from './item/item.component';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { AuthorizationService } from '../../shared/services/auth-service/auth-service';

@Component({
    selector: 'app-courses-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewChecked {
    @ViewChild('appItem', {static: false}) 
    public appItemm: ItemComponent;
    @ViewChild('confirmModal', {static: false}) 
    public confirmModall: ConfirmationModalComponent;

    public listCourses: Course[] = [];
    public items: Course[] = [];
    public searchName: string;
    public titleModal: string = '';
    public data: any;
    public editedId;
    public isAuth: boolean;


    constructor(
        private _coursesService: CoursesService,
        private _authService: AuthorizationService,
        private router:Router
    ) {
        if(!this._authService.isAuthenticated){
            this.router.navigateByUrl('/login');
        }
    }

    ngOnInit() {
        this.items = this._coursesService.index();
        this.listCourses = this._coursesService.index();
        this.isAuth = this._authService.isAuthenticated;
    }
  
    findName(value: string) {
        const findNamePipe = new FindByPipe();
        this.items = findNamePipe.transform(this.listCourses, value);
    }

    ngAfterViewChecked(){
        this.confirmModall.delete.subscribe(() => {
            this.appItemm.deleteCourse(this.appItemm.itemId);
            this.appItemm.closeModal();
            this.items = this._coursesService.index();
        });
    }
}
