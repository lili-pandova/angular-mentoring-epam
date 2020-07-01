import { CourseBorderDirective } from 'src/app/shared/directives/course-border.directive';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from '../../shared/components/search/search.component';
import { IndexComponent } from './index.component';
import { ItemComponent } from './item/item.component';
import { AuthGuardGuard } from '../../shared/services/auth-guard.guard';
import { AddCourseComponent } from '../add-course/add-course.component';
import { EditCourseComponent } from '../edit-course/edit-course.component';
import {
    ConfirmationModalComponent
} from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { AuthorizationService } from '../../shared/services/auth-service/auth-service';
import { Store, StoreModule } from '@ngrx/store';
import { LoadingService } from '../../shared/services/loading.service';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs'; 
import {By} from "@angular/platform-browser";
import { GetAllCourse } from 'src/app/store/actions/courses.action';

const routes: any = [
    { path: '', component: IndexComponent, canActivate: [AuthGuardGuard] },
    { path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuardGuard] },
    { path: 'edit/:id', component: EditCourseComponent, canActivate: [AuthGuardGuard] },
  ];

const courses = [
    {
        title: 'Lorem Ipsum-11',
        description: 'testn111',
        creationDate: '2019-01-06T22:00:00.000Z',
        duration: '87',
        id: 20,
        authors: { "name": "Alex Todorov"}
    },
    {
        title: 'Lorem21 412 412 412 41 Ipsum-11',
        description: 'testn112 421 4 124 21 412 41',
        creationDate: '2019-01-06T22:00:00.000Z',
        duration: '2412',
        id: 21,
        authors: { "name": "Alex Todorov"}
    },
]
describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;
    let router: Router;
    let location: Location;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IndexComponent,
                ItemComponent,
                SearchComponent,
                AddCourseComponent,
                EditCourseComponent,
                ConfirmationModalComponent,
                OrderByPipe,
                CourseBorderDirective,
                DurationPipe,
                FindByPipe
            ],
            providers: [
                FindByPipe,
                CoursesService,
                AuthorizationService,
                LoadingService,
                Store
            ],
            imports: [
                RouterTestingModule.withRoutes(routes), 
                HttpClientTestingModule,
                HttpClientModule,
                StoreModule.forRoot({}),
                ReactiveFormsModule
                ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should subscribe to courses service and show first three courses', () => {
        const spy = spyOn(component._coursesService, "index").and.returnValue(of(courses));
        component.ngOnInit();
        fixture.detectChanges();
    
        expect(spy).toHaveBeenCalled();
        expect(component.items).toBe(courses);
        expect(component.listCourses).toBe(courses);
    })

    it('should subscribe to courses service and return error', () => {
        const spy = spyOn(component._coursesService, "index").and.returnValue(throwError('error'));
        console.log = jasmine.createSpy('log');
        component.ngOnInit();
        fixture.detectChanges();
    
        expect(spy).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('error');
    })

    it('should call findName', () => {
        const spy = spyOn(component._coursesService, "findCourse").and.returnValue(of(courses));
        component.findName('Lorem');
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith("Lorem");
    })

    it('should call findName and return error', () => {
        const spy = spyOn(component._coursesService, "findCourse").and.returnValue(throwError('error'));
        console.log = jasmine.createSpy('log');
        component.findName('Test');
        fixture.detectChanges();

        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('error');
     })

    it('should call the method deleteID', () => {
        const spyDelete = spyOn(component, 'deleteId').and.returnValue(1);
        component.deleteId(1);
        expect(spyDelete).toHaveBeenCalled();
        expect(spyDelete).toHaveBeenCalledWith(1);
     })

    it('should open confirmation modal', () => {
        const spy = spyOn(component.confirmModall.delete, 'emit');
        const button = fixture.debugElement.query(By.css('button.confirm'));

        button.nativeElement.dispatchEvent(new Event('click'));

        component.ngAfterViewInit();
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();

        component.confirmModall.delete.subscribe( res => {
            const spyCloseModal = spyOn(component.appItem, 'closeModal');
            const spyDestroy = spyOn(component._coursesService, 'destroy');
            const spyIndex = spyOn(component._coursesService, 'index');
            const spyStore = spyOn(component['_store'], 'dispatch'); // private var

            expect(spyCloseModal).toHaveBeenCalled();
            expect(spyDestroy).toHaveBeenCalled();
            expect(spyIndex).toHaveBeenCalled();
            expect(spyStore).toHaveBeenCalled();
            expect(spyStore).toHaveBeenCalledWith(new GetAllCourse());
        })
    })

    it('should load more courses', () => {
        const spy = spyOn(component._coursesService, "incrementCount");
        const spyIndex = spyOn(component._coursesService, 'index').and.returnValue(of(courses))
        component.addMore();

        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
        expect(spyIndex).toHaveBeenCalled();
        expect(component.items).toBe(courses);
    })
});
