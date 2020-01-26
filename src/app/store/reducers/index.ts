import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as authUsers from './user.reducer';
import * as course from './courses.reducer';
import { UsersState } from '../../shared/models/users/usersState';
import { CoursesState } from '../../shared/models/course/coursesState';

export const storeFeatureKey = 'store';

export interface State {
    authUser: UsersState;
    course: CoursesState
}

export const reducers: ActionReducerMap<State> = {
    authUser: authUsers.userReducers,
    course: course.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
