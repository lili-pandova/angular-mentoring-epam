import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FindByPipe } from './pipes/find-by.pipe';
import { CourseBorderDirective } from './directives/course-border.directive';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    DurationPipe,
    OrderByPipe,
    FindByPipe,
    CourseBorderDirective
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedRoutingModule
  ],
  providers: [
    OrderByPipe
  ],
  exports: [
    ComponentsModule,
    OrderByPipe,
    DurationPipe,
    FindByPipe,
    CourseBorderDirective
  ]
})
export class SharedModule { }
