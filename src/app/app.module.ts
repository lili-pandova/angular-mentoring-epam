import { from } from 'rxjs';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesRoutingModule } from './courses/courses-routing.module';
import { CoursesModule } from './courses/courses.module';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { AuthGuardGuard } from './shared/services/auth-guard.guard';
import { AuthorizationService } from './shared/services/auth-service/auth-service';
import { CoursesService } from './shared/services/course-service/courses.service';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { SharedModule } from './shared/shared.module';
import { StaticPagesModule } from './static-pages/static-pages.module';

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
        CoursesModule,
        HttpClientModule,
        StaticPagesModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [CoursesService,
                AuthorizationService,
                OrderByPipe,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptorService,
                    multi: true
                },
                AuthGuardGuard],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
