import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course/course';
import { map } from 'rxjs/operators';
import { LoadingService } from '../loading.service';
import * as fromStore from '../../../store/reducers';
import { DeleteCourse, GetAllCourse, UpdateCourse } from '../../../store/actions/courses.action';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private count: number = 1;
    public item;
    private modelEndpoint = AppConfig.apiUrl + '/courses';

    constructor(private httpClient: HttpClient,
                private loadingService: LoadingService,
                private _store: Store<fromStore.State>) {
    }

    incrementCount() {
        return this.count++;
    }

    index() {
        let logCoursesLimit = this.count * 3;
        this.loadingService.show();
        this._store.dispatch(new GetAllCourse());

        return this.httpClient
            .get<Course[]>(this.modelEndpoint + `?_page=$1&_limit=${logCoursesLimit}&_sort=createdAt&_order=desc`)
            .pipe(map((obj: any) => {
                this.loadingService.hide();

                return obj;
            }));
    };

    findCourse(searchWord): Observable<Course[]> {
        this.loadingService.show();

        return this.httpClient.get<Course[]>(this.modelEndpoint, {params: {'q': searchWord}})
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }));
    }

    destroy(id: any) {
        this.loadingService.show();
        this._store.dispatch(new DeleteCourse());

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
        this._store.dispatch(new UpdateCourse());

        return this.httpClient.put(this.modelEndpoint + '/' + id, data)
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }));
    };
}
