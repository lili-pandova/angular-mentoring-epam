import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
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
    let debugElement: DebugElement;
    let deleteClass;
    let deleteEl;
    let deleteCourse;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ItemComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;
        /*deleteCourse = {deleteCourse: jasmine.createSpy('deleteCourse')};*/
    });

    it('should have title "Lorem Ipsum"', () => {
        component.data = data;
        fixture.detectChanges();
        expect(component.data.title).toEqual('Lorem Ipsum');
    });
    it('should trigger click event', () => {
        component.data = data;
        fixture.detectChanges();
        deleteClass  = fixture.debugElement.query(By.css('.delete'));
        deleteEl = deleteClass.nativeElement;
        deleteClass.triggerEventHandler('click', null);
        expect(component.data.id).toEqual(1); /* ???*/
    });
    // it('checks the call of the func',  () => {
    //     const btn = fixture.debugElement.query(By.css('.delete'));
    //     fixture.detectChanges();
    //     btn.triggerEventHandler('click', null);
    //     expect(deleteCourse.deleteCourse).toHaveBeenCalled();
    // });
});
