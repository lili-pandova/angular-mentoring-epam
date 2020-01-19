import { Course } from './course';

export interface CoursesState {
    courses: Course[],
    addCourse: object,
    loaded: boolean,
    loading: boolean
}