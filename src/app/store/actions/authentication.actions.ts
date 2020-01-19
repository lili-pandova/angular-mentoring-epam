import { Action } from '@ngrx/store';

import { Users } from '../../shared/models/users/users';
import { Authentication as AuthActionTypes } from '../../shared/enum/authentication.enum';

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class LoadAuthsFail implements Action {
  readonly type = AuthActionTypes.LoadAuthsFail;

  constructor(public payload: any) {}
}

export class LoadAuthsSuccess implements Action {
  readonly type = AuthActionTypes.LoadAuthsSuccess;

  constructor(public payload: Users[]) {}
}

export type AuthActions = LoadAuths | LoadAuthsFail | LoadAuthsSuccess | AuthActionTypes;  //?Why
