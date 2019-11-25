import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ItemComponent } from './item.component';
import { Course } from '../../../shared/models/course/course';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { CourseBorderDirective } from 'src/app/shared/directives/course-border.directive';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';

@Component({
    template: `
        <div
            [appCourseBorder]="data.creationDate"
            [ngClass]="{ changeBackground: topRated == true }"
            class="item-component"
        >
            <div *ngIf="data.topRated">
                <span class="star"></span>
            </div>
            <ul>
                <li class="title">{{ data.title | uppercase }}</li>
                <li class="creation">
                    {{ data.creationDate | date: 'MMM d, y' }}
                </li>
                <li class="duration">
                    {{ data.duration | duration: data.duration }}
                </li>
                <li class="description">{{ data.description }}</li>
            </ul>
            <div class="btns">
                <button
                    type="button"
                    class="btn btn-default edit dark-sky-blue edit"
                    (click)="editCourse($event)"
                >
                    Edit
                </button>
                <button
                    type="button"
                    class="btn btn-default dark-sky-blue delete"
                    (click)="deleteCourse($event)"
                >
                    Delete
                </button>
            </div>
        </div>
    `
})
class TestHostComponent {
    public data: Course = {
        id: 1,
        title: 'Lorem Ipsum',
        creationDate: new Date('February 4, 2016'),
        duration: 50,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        topRated: true
    };

    selectedData: Course;

    editCourse() {
        console.log('You clicked the edit-button');
    }

    deleteCourse(data: Course) {
        this.selectedData = data;
    }
}

describe('ItemComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ItemComponent,
                TestHostComponent,
                OrderByPipe,
                CourseBorderDirective,
                DurationPipe
            ],
            providers: [FindByPipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;

        console.log = jasmine.createSpy('log');
    });

    it('should edit course mock', () => {
        const testHost = new TestHostComponent();
        component.data = testHost.data;
        fixture.detectChanges();

        testHost.editCourse();
        expect(console.log).toHaveBeenCalledWith('You clicked the edit-button');
    });
});
