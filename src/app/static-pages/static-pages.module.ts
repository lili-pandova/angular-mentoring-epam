import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

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
