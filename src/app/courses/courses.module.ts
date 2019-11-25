import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { ItemComponent } from './index/item/item.component';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';

@NgModule({
    declarations: [IndexComponent, ItemComponent, OrderByPipe],
    imports: [CommonModule]
})
export class CoursesModule {}
