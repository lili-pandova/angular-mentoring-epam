import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/course-service/courses.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public coursesForm: FormGroup;
  public item: Course;

  constructor(
    private _coursesService: CoursesService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.coursesForm = this.fb.group({
      title: [''],
      description: [''],
      creationDate: [''],
      duration: ['']
    })

    this.activatedRoute.params.subscribe((params: any) => {
      this.fetchItem(params.id);
    });
  }

  fetchItem(id: number) {
    this._coursesService.view(id).subscribe((data: Course) => {
      this.item = data;
      this.coursesForm.setValue({
        title: data.title,
        description: data.description,
        creationDate: data.creationDate,
        duration: data.duration
      })
    });
  }

  cancel() {
    this.router.navigateByUrl('/courses');
  }

  onSubmit() {
    this._coursesService.update(this.item.id, this.coursesForm.value).subscribe((data) => {
      this.cancel();
    })
  }
}
