import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AuthGuardGuard } from '../shared/services/auth-guard.guard';

const coursesRoutes: Routes = [
  { path: 'courses', component: IndexComponent, canActivate: [AuthGuardGuard] },
  { path: 'courses/add', component: AddCourseComponent, canActivate: [AuthGuardGuard] },
  { path: 'courses/edit/:id', component: EditCourseComponent, canActivate: [AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
