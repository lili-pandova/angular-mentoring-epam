import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedRoutingModule } from './static-pages-routing.module';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],

  imports: [
    CommonModule,
    SharedRoutingModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StaticPagesModule { }
