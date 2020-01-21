import { createReducer, on } from '@ngrx/store';
import { UsersState } from '../../shared/models/users/usersState';
import * as authenticationActions from '../actions/authentication.actions';
import { AuthActions, LoadAuthsSuccess } from '../actions/authentication.actions';

// export const initialState: UsersState = {
//     users: [
//         {
//             id: 1,
//             token: '1234b',
//             name: 'Liliya Pandova',
//             email: 'lilia_pandova@abv.bg',
//             password: '12345'
//         },
//     ],
//     loaded: false,
//     loading: false
// };

// import {
//     ActionReducer,
//     ActionReducerMap,
//     createFeatureSelector,
//     createSelector,
//     MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../../environments/environment';
//
// import { Users } from 'src/app/shared/models/users/users';
// import * as authenticationActions from '../actions/authentication.actions';
// import { UsersState } from '../../shared/models/users/usersState';
//
// export const authenticationFeatureKey = 'authentication';
//
export const initialState: UsersState = {
    users: [
        {
            "id": 1,
            "token": "1234b",
            "name": "Liliya Pandova",
            "email": "lilia_pandova@abv.bg",
            "password": "12345"
        },
    ],
    selectedUser: null,
    loaded: false,
    loading: false
};
//
export const authReducers = (state = initialState,
                             action: AuthActions): UsersState => {
    console.log(action.type);
    switch ( action.type ) {
        // case authenticationActions.LoadAuths: {
        //     console.log(...state);
        //     return {
        //         ...state,
        //         loading: true,
        //         loaded: false
        //     };
        // }
        //
        // case authenticationActions.LoadAuthsFail: {
        //     return {
        //         ...state,
        //         loading: false,
        //         loaded: false
        //     }
        // }

        case '[Auth] Load Auths Success': {
            return {
                ...state,
                users: [],
                selectedUser: action.payload,
                loading: false,
                loaded: true
            };
        }

        default:
            return state;
    }
};

// export const initialState = 0;
//
// const authReducerr = createReducer(
//     initialState,
//     on(LoadAuthsSuccess, state => {
//         return state;
//     })
// );
//
// export function authReducer(state, action) {
//     return authReducerr(state, action);
// }
