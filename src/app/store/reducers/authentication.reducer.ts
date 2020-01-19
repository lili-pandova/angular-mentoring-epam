import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../../../environments/environment';

  import { Users } from 'src/app/shared/models/users/users';
  import * as authenticationActions from '../actions/authentication.actions';
  import { UsersState } from '../../shared/models/users/usersState';

  export const authenticationFeatureKey = 'authentication';
  
  export const initialState: UsersState = {
    users: [
        {
          "id": 1,
          "token": "1234b",
          "name": "Liliya Pandova",
          "email": "lilia_pandova@abv.bg",
          "password": "12345"
        },
        {
          "id": 2,
          "token": "6789b",
          "name": "Rosi Pandova",
          "email": "r_pandova@abv.bg",
          "password": "qwerty"
        },
        {
          "id": 3,
          "token": "1234567",
          "name": "Maria Ivanova",
          "email": "m_ivanova@abv.bg",
          "password": "aasdfg"
        }
      ],
    loaded: false,
    loading: false
  }

  export function reducer(
      state = initialState,
      action: any //authenticationActions.AuthActions ???
  ): UsersState {

    switch(action.type) { //?
        case authenticationActions.LoadAuths: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }

        case authenticationActions.LoadAuthsFail: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case authenticationActions.LoadAuthsSuccess: {
            return {
                ...state,
                loading: false,
                loaded: true
            }
        }
    }
    return state;
  }