import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesService } from './shared/services/course-service/courses.service';
import { AuthorizationService } from './shared/services/auth-service/auth-service';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { CoursesRoutingModule } from './courses/courses-routing.module';
import { SharedRoutingModule } from './shared/shared-routing.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        SharedRoutingModule,
        CoursesRoutingModule, 
        CoursesModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [CoursesService, AuthorizationService, OrderByPipe],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
