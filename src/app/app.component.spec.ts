import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCoursesBtnComponent } from './shared/components/add-courses-btn/add-courses-btn.component';
import { ItemComponent } from './courses/index/item/item.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { IndexComponent } from './courses/index/index.component';
import { UserLogComponent } from './shared/components/user-log/user-log.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './shared/components/search/search.component';
import { LoadMoreComponent } from './shared/components/load-more/load-more.component';
import { UserComponent } from './shared/components/user/user.component';
import { FindByNamePipe } from './shared/pipes/find-by-name.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { DurationPipe } from './shared/pipes/duration.pipe';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AddCoursesBtnComponent,
                ItemComponent,
                HeaderComponent,
                FooterComponent,
                LogoComponent,
                IndexComponent,
                UserLogComponent,
                BreadcrumbsComponent,
                SearchComponent,
                LoadMoreComponent,
                UserComponent,
                FindByNamePipe,
                OrderByPipe,
                DurationPipe
            ],
            providers: [FindByNamePipe],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        console.log = jasmine.createSpy('log');
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-mentoring'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('angular-mentoring');
    });

    it('should test ngOnChanges', () => {
        fixture.detectChanges();

        component.ngOnChanges();
        expect(console.log).toHaveBeenCalledWith('OnChange hook');
    });

    it('should test ngOnInit', () => {
        fixture.detectChanges();

        component.ngOnInit();
        expect(console.log).toHaveBeenCalledWith('OnInit hook');
    });

    it('should test ngDoCheck', () => {
        fixture.detectChanges();

        component.ngDoCheck();
        expect(console.log).toHaveBeenCalledWith('DoCheck hook');
    });

    it('should test ngAfterContentInit', () => {
        fixture.detectChanges();

        component.ngAfterContentInit();
        expect(console.log).toHaveBeenCalledWith('AfterContentInit hook');
    });

    it('should test ngAfterContentChecked', () => {
        fixture.detectChanges();

        component.ngAfterContentChecked();
        expect(console.log).toHaveBeenCalledWith('AfterContentChecked hook');
    });

    it('should test ngAfterViewInit', () => {
        fixture.detectChanges();

        component.ngAfterViewInit();
        expect(console.log).toHaveBeenCalledWith('AfterViewInit hook');
    });

    it('should test ngAfterViewChecked', () => {
        fixture.detectChanges();

        component.ngAfterViewChecked();
        expect(console.log).toHaveBeenCalledWith('AfterViewChecked hook');
    });

    it('should test ngOnDestroy', () => {
        fixture.detectChanges();

        component.ngOnDestroy();
        expect(console.log).toHaveBeenCalledWith('OnDestroy hook');
    });
});
