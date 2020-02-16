import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatChipsModule
} from '@angular/material/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesRoutingModule } from '../../courses/courses-routing.module';
import { AddCoursesBtnComponent } from './add-courses-btn/add-courses-btn.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { DurationComponent } from './duration/duration.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { UserLogComponent } from './user-log/user-log.component';
import { UserComponent } from './user/user.component';
import { DateComponent } from './date/date.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchComponent,
    UserLogComponent,
    AddCoursesBtnComponent,
    LoadMoreComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    DurationComponent,
    ConfirmationModalComponent,
    LoadingComponent,
    DateComponent,
    AuthorsComponent,
    FormErrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    MaterialsModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchComponent,
    UserLogComponent,
    AddCoursesBtnComponent,
    LoadMoreComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    DurationComponent,
    ConfirmationModalComponent,
    LoadingComponent,
    DateComponent,
    AuthorsComponent,
    FormErrorsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
