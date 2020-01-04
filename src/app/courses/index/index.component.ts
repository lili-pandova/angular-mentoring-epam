import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewChecked, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from 'src/app/shared/models/course/course';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { ItemComponent } from './item/item.component';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { LoadMoreComponent } from 'src/app/shared/components/load-more/load-more.component';
import { AuthorizationService } from '../../shared/services/auth-service/auth-service';

@Component({
    selector: 'app-courses-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit, AfterViewChecked, DoCheck {
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

    ngAfterViewChecked(){
        this.confirmModall.delete.subscribe(() => {
            this.appItem.deleteCourse(this.appItem.itemId);
            this.appItem.closeModal();
            this.items = this._coursesService.index();
            this.appItemm.closeModal();
            this._coursesService.destroy(this.itemId);
            this._coursesService.index().subscribe(res => this.items = res,
                                                   error => console.log(error));
        });
    }

    addMore() {
        this._coursesService.incrementCount();
        this._coursesService.index().subscribe(res => this.items = res,
                                                      error => console.log(error));
    }
}
