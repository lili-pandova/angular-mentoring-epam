import { Action } from '@ngrx/store';
import { User } from '../../shared/models/user/user';

export enum UserAuthentication {
  LoadUserAuthentication = '[User] Load User',
  UserAuthenticationFail = '[User] Load User Fail',
  UserAuthenticationSuccess = '[User] Load User Success'
}

export class LoadUserAuthentication implements Action {
  readonly type = UserAuthentication.LoadUserAuthentication;
}

export class UserAuthenticationFail implements Action {
  readonly type = UserAuthentication.UserAuthenticationFail;

  constructor(public payload: any) {}
}

export class UserAuthenticationSuccess implements Action {
  public readonly type = '[Auth] Load Auths Success';

  constructor(public payload: User) {}
}

export type UserActions = LoadUserAuthentication | UserAuthenticationFail | UserAuthenticationSuccess | UserAuthentication;

