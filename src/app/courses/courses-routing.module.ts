import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardGuard } from '../shared/services/auth-guard.guard';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { IndexComponent } from './index/index.component';

const coursesRoutes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuardGuard] },
  { path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuardGuard] },
  { path: 'edit/:id', component: EditCourseComponent, canActivate: [AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
