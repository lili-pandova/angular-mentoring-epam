import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('store', reducers)
  ]
})
export class MyStoreModule { }
