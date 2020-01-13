import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';

const coursesRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
