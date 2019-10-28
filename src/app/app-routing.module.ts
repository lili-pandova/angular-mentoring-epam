import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FooterComponent} from './shared/components/footer/footer.component';

const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

