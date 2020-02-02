import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { IndexComponent } from './index/index.component';
import { ItemComponent } from './index/item/item.component';
import { FormComponent } from './partials/form/form.component';

@NgModule({
    declarations: [
        IndexComponent, 
        ItemComponent,
        AddCourseComponent,
        EditCourseComponent,
        FormComponent
    ],
    exports: [
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
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoursesRoutingModule,
        MatChipsModule,
        SharedModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule {}
