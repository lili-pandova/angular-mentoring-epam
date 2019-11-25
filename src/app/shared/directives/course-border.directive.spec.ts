import { CourseBorderDirective } from './course-border.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from 'protractor';

import { ItemComponent } from 'src/app/courses/index/item/item.component';
import { DurationPipe } from '../pipes/duration.pipe';
import { FindByPipe } from '../pipes/find-by.pipe';

const data = {
    id: 1,
    title: 'Lorem Ipsum',
    creationDate: new Date('February 4, 2020'),
    duration: 50,
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    topRated: true
};

const dataFresh = {
    id: 1,
    title: 'Lorem Ipsum',
    creationDate: new Date('November 15, 2019'),
    duration: 50,
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    topRated: true
};

const dataDefault = {
    id: 1,
    title: 'Lorem Ipsum',
    creationDate: new Date('June 15, 2019'),
    duration: 50,
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    topRated: true
};

let elRefMock = {
    nativeElement: document.createElement('div')
};
describe('CourseBorderDirective', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;
    let des;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ItemComponent, CourseBorderDirective, DurationPipe],
            providers: [FindByPipe]
        }).compileComponents();

        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        const directive = new CourseBorderDirective(elRefMock);
        expect(directive).toBeTruthy();
    });

    it('should mark as fresh course', () => {
        component.data = dataFresh;
        fixture.detectChanges();

        const div: HTMLElement = fixture.nativeElement.querySelector(
            'div.item-component'
        );
        const border = div.style.border;
        expect(border).toBe('1px solid rgb(155, 200, 55)');
    });

    it('should mark as new', () => {
        component.data = data;
        fixture.detectChanges();

        const div: HTMLElement = fixture.nativeElement.querySelector(
            'div.item-component'
        );
        const border = div.style.border;
        expect(border).toBe('1px solid rgb(48, 182, 221)');
    });

    it('should be default', () => {
        component.data = dataDefault;
        fixture.detectChanges();

        const div: HTMLElement = fixture.nativeElement.querySelector(
            'div.item-component'
        );
        const border = div.style.border;
        expect(border).toBe('none');
    });
});
