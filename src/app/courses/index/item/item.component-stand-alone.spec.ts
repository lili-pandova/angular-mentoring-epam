import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { CourseBorderDirective } from 'src/app/shared/directives/course-border.directive';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';

const data = {
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

describe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ItemComponent,
                OrderByPipe,
                CourseBorderDirective,
                DurationPipe
            ],
            providers: [FindByPipe]
        }).compileComponents();

        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;

        console.log = jasmine.createSpy('log');
    });

    it('should have title "Lorem Ipsum"', () => {
        component.data = data;
        fixture.detectChanges();
        expect(component.data.title).toEqual(data.title);
    });

    it('should trigger click event', () => {
        component.data = data;
        fixture.detectChanges();

        let targetId: number;
        component.delete.subscribe((id: number) => {
            targetId = id;
        });

        component.deleteCourse();
        expect(targetId).toEqual(data.id);
    });

    it('should edit course', () => {
        component.data = data;
        fixture.detectChanges();

        component.editCourse();
        expect(console.log).toHaveBeenCalledWith('You clicked the edit-button');
    });
});
