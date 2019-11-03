import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
        component.data = data;
        fixture.detectChanges();
    });


});
