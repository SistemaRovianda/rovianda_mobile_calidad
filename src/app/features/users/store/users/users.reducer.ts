import { createReducer, on, Action } from "@ngrx/store";
import {
  registerUsersError,
  fetchUsersError,
  fetchUsersSuccess,
  fetchUsers,
  clearUsers,
} from "./users.actions";
import { UserRegistered } from "src/app/shared/models/user.interface";

export interface UsersState {
  loading: boolean;
  users: UserRegistered[];
  error: string;
}

const initialState: UsersState = {
  loading: false,
  users: null,
  error: null,
};

const _usersReducer = createReducer<UsersState>(
  initialState,
  on(fetchUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(fetchUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users,
  })),
  on(fetchUsersError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(registerUsersError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(clearUsers, (state) => ({
    ...state,
    users: null,
  }))
);

export function usersReducer(state: UsersState, action: Action) {
  return _usersReducer(state, action);
}
