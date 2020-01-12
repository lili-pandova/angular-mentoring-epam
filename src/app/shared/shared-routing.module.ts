import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';

const coursesRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
