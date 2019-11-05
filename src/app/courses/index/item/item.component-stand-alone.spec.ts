import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItemComponent } from './item.component';

const data = {
    id: 1,
    title: 'Lorem Ipsum',
    creationDate: new Date('February 4, 2016'),
    duration: 50,
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
};

describe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ItemComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;

        console.log = jasmine.createSpy('log');
    });

    fit('should have title "Lorem Ipsum"', () => {
        component.data = data;
        fixture.detectChanges();
        expect(component.data.title).toEqual(data.title);
    });

    fit('should trigger click event', () => {
        component.data = data;
        fixture.detectChanges();

        let targetId: number;
        component.delete.subscribe((id: number) => {
            targetId = id;
        });

        component.deleteCourse();
        expect(targetId).toEqual(data.id);
    });

    fit('should edit course', () => {
        component.data = data;
        fixture.detectChanges();

        component.editCourse();
        expect(console.log).toHaveBeenCalledWith('You clicked the edit-button');
    });
});
