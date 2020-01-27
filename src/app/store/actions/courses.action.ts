import { Action } from '@ngrx/store';

import { Course } from '../../shared/models/course/course';

export enum Courses {
    GetAllCourses ='[Course] Get All Course',
    GetAllCoursesFail ='[Course] Get All Course Fail',
    GetAllCoursesSuccess ='[Course] Get All Course Success',
    LoadCourse = '[Course] Load Course',
    AddCourseFail = '[Course] Add Course Fail',
    AddCourseSuccess = '[Course] Add Course Success',
    UpdateCourse = '[Course] Update Course',
    UpdateCourseFail = '[Course] Update Course Fail',
    UpdateCourseSuccess = '[Course] Update Course Success',
    DeleteCourse = '[Course] Delete Course',
    DeleteCourseFail = '[Course] Delete Course Fail',
    DeleteCourseSuccess = '[Course] Delete Course Success'
}

export class GetAllCourse implements Action {
    readonly type = Courses.GetAllCourses;
}

export class GetAllCoursesFail implements Action {
    readonly type = Courses.GetAllCoursesFail;

    constructor(public payload: any) {}
}

export class GetAllCourseSuccess implements Action {
    readonly type = Courses.GetAllCoursesSuccess;

    constructor(public payload: Course[]) {}
}

export class LoadCourse implements Action {
  readonly type = Courses.LoadCourse;
}

export class AddCourseFail implements Action {
  readonly type = Courses.AddCourseFail;

  constructor(public payload: any) {}
}

export class AddCourseSuccess implements Action {
  readonly type = Courses.AddCourseSuccess;

  constructor(public payload: Course[]) {}
}

export class UpdateCourse implements Action {
    readonly type = Courses.UpdateCourse;
}

export class UpdateCourseFail implements Action {
    readonly type = Courses.UpdateCourseFail;

    constructor(public payload: any) {}
}

export class UpdateCourseSuccess implements Action {
    readonly type = Courses.UpdateCourseSuccess;

    constructor(public payload: Course[]) {}
}


export class DeleteCourse implements Action {
    readonly type = Courses.DeleteCourse;
}

export class DeleteCourseFail implements Action {
    readonly type = Courses.DeleteCourseFail;

    constructor(public payload: any) {}
}

export class DeleteCourseSuccess implements Action {
    readonly type = Courses.DeleteCourseSuccess;

    constructor(public payload: Course[]) {}
}

export type CoursesActions = LoadCourse |
                            AddCourseFail |
                            AddCourseSuccess |
                            GetAllCourse |
                            GetAllCoursesFail |
                            GetAllCourseSuccess |
                            UpdateCourse |
                            UpdateCourseFail |
                            UpdateCourseSuccess |
                            DeleteCourse |
                            DeleteCourseFail |
                            DeleteCourseSuccess |
                            Courses;
