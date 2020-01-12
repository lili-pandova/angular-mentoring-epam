import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { DurationComponent } from './duration/duration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { CoursesRoutingModule } from '../../courses/courses-routing.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent, LogoComponent, BreadcrumbsComponent, SearchComponent, UserLogComponent,
    AddCoursesBtnComponent, LoadMoreComponent, FooterComponent, 
    UserComponent, LoginComponent, DurationComponent,
    ConfirmationModalComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRoutingModule
  ],
  exports: [
    HeaderComponent, LogoComponent, BreadcrumbsComponent, SearchComponent, UserLogComponent,
    AddCoursesBtnComponent, LoadMoreComponent, FooterComponent, 
    UserComponent, LoginComponent, DurationComponent,
    ConfirmationModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
