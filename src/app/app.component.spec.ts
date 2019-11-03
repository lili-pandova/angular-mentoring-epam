import { TestBed, async } from '@angular/core/testing';
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

describe('AppComponent', () => {
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
        UserComponent
      ],
    }).compileComponents();
  }));

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
});
