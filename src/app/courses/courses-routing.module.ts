import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AddCourseComponent } from './add-course/add-course.component';
const routes: Routes = [
  { path: 'courses', component: IndexComponent },
  { path: 'courses/add', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
