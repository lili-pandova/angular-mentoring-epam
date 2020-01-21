import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
    State
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { Users } from 'src/app/shared/models/users/users';
import * as coursesActions from '../actions/courses.action';
import { CoursesState } from '../../shared/models/course/coursesState';

export const coursesFeatureKey = 'courses';

export const initialState: CoursesState = {
    courses: [
        {
            title: 'Lorem Ipsum-11',
            description: 'testn111',
            creationDate: '2019-01-06T22:00:00.000Z',
            duration: '87',
            id: 20
        },
        {
            title: 'Lorem21 412 412 412 41 Ipsum-11',
            description: 'testn112 421 4 124 21 412 41',
            creationDate: '2019-01-06T22:00:00.000Z',
            duration: '2412',
            id: 21
        },
    ],
    loaded: false,
    loading: false
};

export function reducer(state = initialState, action: any): CoursesState {
    switch ( action.type ) {
        case coursesActions.LoadCourse: {
            console.log(state);
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }

        case coursesActions.AddCourseFail: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case coursesActions.AddCourseSuccess: {
            return {
                ...state,
                // addCourse: [...state.courses, ???],
                loading: false,
                loaded: true
            }
        }
    }
    return state;
}

export const getLoadCourse = (state: CoursesState) => state.courses;
export const getLoadingCourse = (state: CoursesState) => state.loading;
export const getLoadedCourse = (state: CoursesState) => state.loaded;
