import { Course } from './course';

export interface CoursesState {
    courses: Course[];
    loaded: boolean;
    loading: boolean;
}
