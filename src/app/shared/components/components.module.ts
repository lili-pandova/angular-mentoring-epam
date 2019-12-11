import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { UserLogComponent } from './user-log/user-log.component';
import { AddCoursesBtnComponent } from './add-courses-btn/add-courses-btn.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DurationComponent } from './duration/duration.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, BreadcrumbsComponent, SearchComponent, UserLogComponent,
    AddCoursesBtnComponent, LoadMoreComponent, FooterComponent, UserComponent, LoginComponent, AddCourseComponent, DurationComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
