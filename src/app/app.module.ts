import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './courses/index/index.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { UserLogComponent } from './shared/components/user-log/user-log.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './shared/components/search/search.component';
import { AddCoursesBtnComponent } from './shared/components/add-courses-btn/add-courses-btn.component';
import { ItemComponent } from './courses/index/item/item.component';
import { LoadMoreComponent } from './shared/components/load-more/load-more.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UserComponent } from './shared/components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseBorderDirective } from './shared/directives/course-border.directive';
import { DurationPipe } from './shared/pipes/duration.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { FindByPipe } from './shared/pipes/find-by.pipe';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        HeaderComponent,
        LogoComponent,
        UserLogComponent,
        BreadcrumbsComponent,
        SearchComponent,
        AddCoursesBtnComponent,
        ItemComponent,
        LoadMoreComponent,
        FooterComponent,
        UserComponent,
        CourseBorderDirective,
        DurationPipe,
        OrderByPipe,
        FindByPipe
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [FindByPipe],
    bootstrap: [AppComponent]
})
export class AppModule {}
