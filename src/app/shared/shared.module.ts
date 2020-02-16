import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { CourseBorderDirective } from './directives/course-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FindByPipe } from './pipes/find-by.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SharedRoutingModule } from './shared-routing.module';
import { LoadingService } from './services/loading.service';
import { MaterialsModule } from '../materials.module';

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
    SharedRoutingModule,
    MaterialsModule
  ],
  providers: [
    OrderByPipe,
    LoadingService
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
