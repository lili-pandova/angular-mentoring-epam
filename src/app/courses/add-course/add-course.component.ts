import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { AuthorizationService } from '../../shared/services/auth-service/auth-service';

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
    private router: Router
    ) { }

  ngOnInit(){
    this.coursesForm = this.fb.group({
      title: [''],
      description: [''],
      creationDate: [''],
      duration: ['']
    })

    this.isAuth = this._authService.isAuthenticated;
  }

  cancel() {
    this.router.navigateByUrl('/courses');
  }

  onSubmit() {
    const data = this.coursesForm.value;
    data.creationDate = new Date(data.creationDate);

    this._coursesService.store(data).subscribe((data) => {
      this.cancel();
    })
  }
}
