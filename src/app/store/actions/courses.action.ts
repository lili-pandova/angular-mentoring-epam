import { Action } from '@ngrx/store';

import { Course } from '../../shared/models/course/course';
import { Course as CourseActionTypes } from '../../shared/enum/course.enum';

export class LoadCourse implements Action {
  readonly type = CourseActionTypes.LoadCourse;
}

export class AddCourseFail implements Action {
  readonly type = CourseActionTypes.AddCourseFail;

  constructor(public payload: any) {}
}

export class AddCourseSuccess implements Action {
  readonly type = CourseActionTypes.AddCourseSuccess;

  constructor(public payload: Course[]) {}
}

export type CoursesActions = LoadCourse | AddCourseFail | AddCourseSuccess | CourseActionTypes;  