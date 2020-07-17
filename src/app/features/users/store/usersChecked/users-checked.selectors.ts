import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";

const SELECT_USERS_CHECKED_STATE = (state: AppState) => state.usersChecked;

export const SELECT_USERS_CHECKED = createSelector(
  SELECT_USERS_CHECKED_STATE,
  (state) => state.usersChecked
);
