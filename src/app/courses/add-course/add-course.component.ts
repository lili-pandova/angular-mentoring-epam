import { CoursesService } from 'src/app/shared/services/course-service/courses.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ErrorStateMatcher } from '@angular/material/core';

import { AuthorizationService } from '../../shared/services/auth-service/auth-service';
import { AuthorsService } from '../../shared/services/authors.service';
import { LoadingService } from '../../shared/services/loading.service';
import * as fromStore from '../../store/reducers';
import { AddCourseFail, AddCourseSuccess } from '../../store/actions/courses.action';


export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
    public coursesForm: FormGroup;
    public isAuth: boolean;

    constructor(
        private _coursesService: CoursesService,
        private _authService: AuthorizationService,
        private fb: FormBuilder,
        private router: Router,
        private loadingService: LoadingService,
        private store: Store<fromStore.State>,
        private  _authorsService: AuthorsService
    ) {
    }

    dateValidation(control: FormControl): { [key: string]: boolean } {
        const pattern = /^\d{2}([./-])\d{2}\1\d{4}$/;

        if (!control.value.match(pattern)) {
            return {'dateInvalid': true};
        }
        return null;
    }

    ngOnInit() {
        this.coursesForm = this.fb.group({
            title: ['', [
                Validators.required,
                Validators.maxLength(50),
            ]],
            description: ['', [
                Validators.required,
                Validators.maxLength(500),
            ]],
            creationDate: ['', [
                Validators.required,
                this.dateValidation]],
            duration: ['', Validators.required],
            authors: [null]
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

        this.coursesForm.markAllAsTouched();
    
        this._coursesService.store(data)
            .subscribe(res => {
                    this.store.dispatch(new AddCourseSuccess(res))
                },
                error => {
                    console.error(error);
                    this.store.dispatch(new AddCourseFail(error))
                });
        this.cancel();
    }
}
