import { createReducer, on } from '@ngrx/store';
import { UsersState } from '../../shared/models/users/usersState';
import * as authenticationActions from '../actions/user.actions';
import { UserActions, UserAuthentication } from '../actions/user.actions';

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

export const userReducers = (state = initialState,
                             action: any
): UsersState => {
    switch ( action.type ) {
        case UserAuthentication.LoadUserAuthentication: {
            return {
                ...state,
                selectedUser: null,
                loading: true,
                loaded: false
            };
        }

        case UserAuthentication.UserAuthenticationFail: {
            return {
                ...state,
                selectedUser: null,
                loading: false,
                loaded: false
            }
        }

        case UserAuthentication.UserAuthenticationSuccess: {
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

