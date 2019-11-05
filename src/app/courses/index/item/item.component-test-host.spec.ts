import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ItemComponent } from './item.component';
import { Course } from '../../../shared/models/course/course';

@Component({
    template: `
        <app-item-component>
            <ul>
                <li class="title">{{ data.title }}</li>
                <li class="creation">
                    {{ data.creationDate | date: 'dd/MM/yyyy' }}
                </li>
                <li class="duration">{{ data.duration }} min</li>
                <li class="description">{{ data.description }}</li>
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
        </app-item-component>
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
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ItemComponent, TestHostComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;

        console.log = jasmine.createSpy('log');
    });

    fit('should edit course mock', () => {
        const testHost = new TestHostComponent();
        component.data = testHost.data;
        fixture.detectChanges();

        testHost.editCourse();
        expect(console.log).toHaveBeenCalledWith('You clicked the edit-button');
    });
});
