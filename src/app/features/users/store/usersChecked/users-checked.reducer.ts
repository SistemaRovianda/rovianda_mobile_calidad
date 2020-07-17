import { UsersCheckers } from "src/app/shared/models/user.interface";
import { createReducer, on, Action } from "@ngrx/store";
import { fetchUsersChecked } from "./users-checked.actions";

export interface UsersCheckedState {
  usersChecked: UsersCheckers;
  loading: boolean;
  error: string;
}

const initialState: UsersCheckedState = {
  loading: false,
  usersChecked: null,
  error: null,
};

const _usersCheckedReducer = createReducer<UsersCheckedState>(
  initialState,
  on(fetchUsersChecked, (state) => ({
    ...state,
    loading: true,
  }))
);

export function usersCheckedReducer(state: UsersCheckedState, action: Action) {
  return _usersCheckedReducer(state, action);
}
