import { createAction, Action } from '@ngrx/store';
import { Authentication } from '../../shared/enum/authentication.enum';
import { Users } from '../../shared/models/users/users';
import { User } from '../../shared/models/user/user';

// export const LoadAuthsSuccess = createAction('[Auth] Load Auths Success');


// import { Action } from '@ngrx/store';
//
// import { Users } from '../../shared/models/users/users';
// import { Authentication as AuthActionTypes } from '../../shared/enum/authentication.enum';
//
// export class LoadAuths implements Action {
//   readonly type = AuthActionTypes.LoadAuths;
// }
//
// export class LoadAuthsFail implements Action {
//   readonly type = AuthActionTypes.LoadAuthsFail;
//
//   constructor(public payload: any) {}
// }
//
export class LoadAuthsSuccess implements Action {
  public readonly type = '[Auth] Load Auths Success';

  constructor(public payload: User) {}
}
//
// export type AuthActions = LoadAuths | LoadAuthsFail | LoadAuthsSuccess | AuthActionTypes;  //?Why
export type AuthActions = LoadAuthsSuccess;
