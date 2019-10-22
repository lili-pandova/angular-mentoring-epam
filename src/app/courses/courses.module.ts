import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ItemComponent } from './index/item/item.component';



@NgModule({
  declarations: [IndexComponent, ItemComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
