import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
    State
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

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
            id: 20,
            authors: { "name": "Alex Todorov"}
        },
        {
            title: 'Lorem21 412 412 412 41 Ipsum-11',
            description: 'testn112 421 4 124 21 412 41',
            creationDate: '2019-01-06T22:00:00.000Z',
            duration: '2412',
            id: 21,
            authors: { "name": "Alex Todorov"}
        },
    ],
    loaded: false,
    loading: false
};

export function reducer(state = initialState, action: any): CoursesState {
    switch ( action.type ) {
        case coursesActions.GetAllCourse: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case coursesActions.GetAllCoursesFail: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
        case coursesActions.GetAllCourseSuccess: {
            return {
                ...state,
                courses: action.payload,
                loading: false,
                loaded: true
            }
        }
        case coursesActions.LoadCourse: {
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
                courses: [...state.courses, action.payload],
                loading: false,
                loaded: true
            }
        }

        case coursesActions.UpdateCourse: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }

        case coursesActions.UpdateCourseFail: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case coursesActions.UpdateCourseSuccess: {
            return {
                ...state,
                courses: [...state.courses.filter(item => item.id !== action.payload.id), action.payload],
                loading: false,
                loaded: true
            }
        }

        case coursesActions.DeleteCourse: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }

        case coursesActions.DeleteCourseFail: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case coursesActions.UpdateCourseSuccess: {
            return {
                ...state,
                courses: [...state.courses.filter(item => item.id !== action.payload)],
                loading: false,
                loaded: true
            }
        }
    }
    return state;
}
