import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { ItemComponent } from './index/item/item.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
    declarations: [IndexComponent, ItemComponent,AddCourseComponent],
    imports: [CommonModule, FormsModule, CoursesRoutingModule, SharedModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule {}
