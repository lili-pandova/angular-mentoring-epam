import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const coursesRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(coursesRoutes)],
  ],
  exports: [RouterModule]
})
export class StaticPagesModule { }
