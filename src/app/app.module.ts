import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesService } from './shared/services/course-service/courses.service';
import { AuthorizationService } from './shared/services/auth-service/auth-service';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { CoursesRoutingModule } from './courses/courses-routing.module';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { AuthGuardGuard } from './shared/services/auth-guard.guard';

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
        CoursesRoutingModule, 
        CoursesModule,
        HttpClientModule
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
