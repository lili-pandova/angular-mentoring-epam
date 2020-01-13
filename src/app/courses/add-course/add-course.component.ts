import { CoursesService } from 'src/app/shared/services/course-service/courses.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../shared/services/auth-service/auth-service';
import { LoadingService } from '../../shared/services/loading.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public itemId: number;
  public coursesForm: FormGroup;
  public isAuth: boolean;
  public loadingBlock: boolean = true;

  constructor(
    private _coursesService: CoursesService,
    private _authService: AuthorizationService,
    private fb: FormBuilder,
    private router: Router,
    private _loading: LoadingService
    ) { }

  ngOnInit(){
    this.coursesForm = this.fb.group({
      title: [''],
      description: [''],
      creationDate: [''],
      duration: ['']
    })

    this.isAuth = this._authService.isAuthenticated;
    this._loading.showLoadingBlock;
  }

  cancel() {
    this.router.navigateByUrl('/courses');
  }

  onSubmit() {
    const data = this.coursesForm.value;
    data.creationDate = new Date(data.creationDate);

    this._coursesService.store(data)
                        .subscribe(res => {
                          this.loadingBlock = false;
                          res},
                         error => console.error(error));
    this.cancel();
  }
}
