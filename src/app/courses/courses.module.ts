import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { ItemComponent } from './index/item/item.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
    declarations: [IndexComponent, ItemComponent,AddCourseComponent, EditCourseComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoursesRoutingModule,
        SharedModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule {}
