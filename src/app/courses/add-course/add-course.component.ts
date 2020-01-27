import {CoursesService} from 'src/app/shared/services/course-service/courses.service';

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AuthorizationService} from '../../shared/services/auth-service/auth-service';
import {LoadingService} from '../../shared/services/loading.service';
import * as fromStore from '../../store/reducers';
import {AddCourseFail, AddCourseSuccess} from '../../store/actions/courses.action';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
    public itemId: number;
    public coursesForm: FormGroup;
    public isAuth: boolean;

    constructor(
        private _coursesService: CoursesService,
        private _authService: AuthorizationService,
        private fb: FormBuilder,
        private router: Router,
        private loadingService: LoadingService,
        private store: Store<fromStore.State>,
    ) {
    }

    dateValidation(control: FormControl): { [key: string]: boolean } {
        const pattern = /^\d{2}([./-])\d{2}\1\d{4}$/;

        if (!control.value.match(pattern)) {
            return { 'dateInvalid': true };
        }
        return null;
    }

    ngOnInit() {
        this.coursesForm = this.fb.group({
            title: ['', [
                Validators.required,
                Validators.maxLength(50),
            ]],
            description: ['',
                [
                    Validators.required,
                    Validators.maxLength(500),
                ]],
            creationDate: ['', [Validators.required, this.dateValidation]],
            duration: ['', Validators.required]
        });

        this.isAuth = this._authService.isAuthenticated;
        this.loadingService.hide();

    }

    cancel() {
        this.router.navigateByUrl('/courses');
    }

    onSubmit() {
        const data = this.coursesForm.value;
        data.creationDate = new Date(data.creationDate);

        this._coursesService.store(data)
            .subscribe(res => {
                    this.store.dispatch(new AddCourseSuccess(res))
                },
                error => {
                    console.error(error)
                    this.store.dispatch(new AddCourseFail(error))
                });
        this.cancel();
    }
}
