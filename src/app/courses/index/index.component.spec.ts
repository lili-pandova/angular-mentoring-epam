import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { IndexComponent } from './index.component';
import { ItemComponent } from './item/item.component';

describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IndexComponent, ItemComponent]
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
