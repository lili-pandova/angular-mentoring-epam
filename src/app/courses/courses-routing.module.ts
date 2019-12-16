import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const coursesRoutes: Routes = [
  { path: 'courses', component: IndexComponent },
  { path: 'courses/add', component: AddCourseComponent },
  { path: 'courses/edit/:id', component: EditCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
