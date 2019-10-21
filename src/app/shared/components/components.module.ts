import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { UserLogComponent } from './user-log/user-log.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { LoadMoreComponent } from './load-more/load-more.component';



@NgModule({
  declarations: [HeaderComponent, LogoComponent, BreadcrumbsComponent, SearchComponent, UserLogComponent, AddCoursesComponent, LoadMoreComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
