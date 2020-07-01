import { CourseBorderDirective } from 'src/app/shared/directives/course-border.directive';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { FindByPipe } from 'src/app/shared/pipes/find-by.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';

import { ItemComponent } from './item.component';
import { Course } from 'src/app/shared/models/course/course';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

const data: Course = {
    id: 1,
    title: 'Lorem Ipsum',
    creationDate: new Date('February 4, 2016'),
    duration: 50,
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    topRated: true,
    authors: "Liliya"
};

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ItemComponent },
]

describe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;
    let router: Router;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ItemComponent,
                OrderByPipe,
                CourseBorderDirective,
                DurationPipe
            ],
            providers: [
                FindByPipe,
                Store
            ],
            imports: [
                RouterTestingModule.withRoutes(routes), 
                HttpClientTestingModule,
                HttpClientModule,
                StoreModule.forRoot({})
                ]
        }).compileComponents();

        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;

        router = TestBed.get(Router); //reference to injected router
        location = TestBed.get(Location);
        router.initialNavigation();
        console.log = jasmine.createSpy('log');
    });

    it('should have title "Lorem Ipsum"', () => {
        component.data = data;
        fixture.detectChanges();
        expect(component.data.title).toEqual(data.title);
    });

    it('should redirect to the same component if no url is provided', async() => {
        router.navigate(['']);
        expect(location.path()).toBe('/');
    })

    it('should trigger click event', () => {
        component.data = data;
     
        fixture.detectChanges();
      
        let button = fixture.debugElement.nativeElement.querySelector('.delete');
        const spy = spyOn(component, "openModal");

        button.click();
        expect(spy).toHaveBeenCalled();
    });

    it('should emit delete id', () => {
        component.data = data;
    
        const spy = spyOn(component.deleteId, 'emit').and.callThrough();
    
        component.openModal(data.id);
     
        fixture.detectChanges();

        expect(data.id).toEqual(1);
        expect(component.itemId).toEqual(data.id);
       
      
        expect(spy).toHaveBeenCalledWith(1); 
        expect(component.deleteId.emit).toHaveBeenCalled(); 

    })

    
    it('should open modal', () => {
        component.data = data;
        const modal = document.createElement('div');
        modal.setAttribute('class', 'confirmation-modal');

        spyOn(document, "querySelector").and.returnValue(modal);
        component.openModal(1);

        expect(modal).toHaveClass('block');
    });

    it('should close modal', () => {
        component.data = data;
        const modal = document.createElement('div');
        modal.setAttribute('class', 'confirmation-modal, block');

        spyOn(document, "querySelector").and.returnValue(modal);
        component.closeModal();

        expect(modal).not.toHaveClass('block');
    });
});
