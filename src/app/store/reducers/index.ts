import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as authentication from './authentication.reducer';
// import * as course from './courses.reducer';
import { UsersState } from '../../shared/models/users/usersState';
import { authReducers } from './authentication.reducer';
// import { CoursesState } from '../../shared/models/course/coursesState';

export const storeFeatureKey = 'store';

export interface State {
    auth: UsersState;
    // course: CoursesState
}

export const reducers: ActionReducerMap<State> = {
    auth: authReducers
    // course: course.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// createFeatureSElector ???
// createSelector ???
 // hoe to add to the state, payload?
