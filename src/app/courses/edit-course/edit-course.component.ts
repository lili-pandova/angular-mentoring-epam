import { Course } from 'src/app/shared/models/course/course';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthorizationService } from '../../shared/services/auth-service/auth-service';
import * as fromStore from '../../store/reducers';
import { UpdateCourseFail, UpdateCourseSuccess } from '../../store/actions/courses.action';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public coursesForm: FormGroup;
  public item: Course;
  public coursesTitle: any;
  public isAuth: boolean;

  constructor(
    private _coursesService: CoursesService,
    private _authService: AuthorizationService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _store: Store<fromStore.State>
  ) { }

  ngOnInit() {
    this.coursesForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: [''],
      creationDate: [''],
      duration: [''],
      authors: [{}]
    });

    this.activatedRoute.params.subscribe((params: any) => {
      this.fetchItem(params.id);
    });

    this.isAuth = this._authService.isAuthenticated;
  }

  fetchItem(id: number) {
    this._coursesService.view(id).subscribe((data: Course) => {
      console.log(data.authors.name, "data from edit")
      this.item = data;
      console.log()
      this.coursesTitle = data.title;
      this.coursesForm.setValue({
        title: data.title,
        description: data.description,
        creationDate: data.creationDate,
        duration: data.duration,
        authors: data.authors.name
      })
      console.log(this.coursesForm, "test")
    });
  }

  cancel() {
    this.router.navigateByUrl('/courses');
  }

  onSubmit() {
    this._coursesService.update(this.item.id, this.coursesForm.value).subscribe((data) => {
      console.log(data, "updated data")
      this._store.dispatch(new UpdateCourseSuccess(data))
      this.cancel();
    },
      (error) => this._store.dispatch(new UpdateCourseFail(error)))
  }
}
