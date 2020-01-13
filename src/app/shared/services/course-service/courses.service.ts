import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../../models/course/course';
import { map } from 'rxjs/operators';
import { LoadingService } from '../loading.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private count: number = 1;
    public item;
    private modelEndpoint = AppConfig.apiUrl + '/courses';

    constructor(private httpClient: HttpClient,
        private loadingService: LoadingService) { }

    incrementCount() {
        return this.count++;
    }
    index() {
        this.loadingService.show();

        return this.httpClient
            .get<Course[]>(this.modelEndpoint + `?_page=${this.count}&_limit=3&_sort=createdAt&_order=desc`)
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }));
    };

    findCourse(serachWord): Observable<Course[]> {
        this.loadingService.show();

        return this.httpClient.get<Course[]>(this.modelEndpoint, { params: { 'q': serachWord } })
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }));
    }

    destroy(id: any) {
        this.loadingService.show();

        return this.httpClient.delete<Course[]>(this.modelEndpoint + '/' + id)
        .pipe(map((obj: any) => {
            this.loadingService.hide();
            return obj;
        }));
    }

    store(data: any) {
        this.loadingService.show();

        return this.httpClient.post(this.modelEndpoint, data)
        .pipe(map((obj: any) => {
            this.loadingService.hide();
            return obj;
        }));
    }

    view(id: number) {
        this.loadingService.show();

        return this.httpClient.get(this.modelEndpoint + '/' + id)
        .pipe(map((obj: any) => {
            this.loadingService.hide();
            return obj;
        }));
    }

    update(id: number, data: any) {
        this.loadingService.show();

        return this.httpClient.put(this.modelEndpoint + '/' + id, data)
        .pipe(map((obj: any) => {
            this.loadingService.hide();
            return obj;
        }));
    };
}
