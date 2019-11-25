import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IndexComponent } from './index.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { CourseBorderDirective } from 'src/app/shared/directives/course-border.directive';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';

describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IndexComponent,
                ItemComponent,
                SearchComponent,
                OrderByPipe,
                CourseBorderDirective,
                DurationPipe,
                FindByPipe
            ],
            providers: [FindByPipe],
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
});
