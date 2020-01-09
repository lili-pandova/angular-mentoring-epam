import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const coursesRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
