import { Users } from './users';
import { User } from '../user/user';

export interface UsersState {
    users: Users[];
    selectedUser: User;
    loaded: boolean;
    loading: boolean;
}
