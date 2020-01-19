import { Users } from './users';

export interface UsersState {
    users: Users[],
    loaded: boolean,
    loading: boolean
}