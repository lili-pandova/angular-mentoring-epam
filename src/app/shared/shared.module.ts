import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCourseComponent } from './new-course/new-course.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    NewCourseComponent,
    LoginComponent],
  imports: [CommonModule]
})
export class SharedModule {}
