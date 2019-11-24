import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ItemComponent } from './item.component';
import { Course } from '../../../shared/models/course/course';

@Component({
    template: `
        <section *ngFor="let item of searchName ? findByNamePipeString : data | orderBy">
            <div
                [appCourseBorder]="item.creationDate"
                [ngClass]="{ changeBackground: topRated == true }"
                class="item-component">
                <div *ngIf="topRated">
                    <span class="star"></span>
                </div>
                <ul>
                    <li class="title">{{ item.title | uppercase }}</li>
                    <li class="creation">
                        {{ item.creationDate | date: 'MMM d, y' }}
                    </li>
                    <li class="duration">
                        {{ item.duration | duration: item.duration }}
                    </li>
                    <li class="description">{{ item.description }}</li>
                </ul>
                <div class="btns">
                    <button
                        type="button"
                        class="btn btn-default edit dark-sky-blue edit"
                        (click)="editCourse($event)">
                        Edit
                    </button>
                    <button
                        type="button"
                        class="btn btn-default dark-sky-blue delete"
                        (click)="deleteCourse($event)">
                        Delete
                    </button>
                </div>
            </div>
        </section>
`})
class TestHostComponent {
    public data: Course = {
        id: 1,
        title: 'Lorem Ipsum',
        creationDate: new Date('February 4, 2016'),
        duration: 50,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
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
            declarations: [ItemComponent, TestHostComponent],
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
