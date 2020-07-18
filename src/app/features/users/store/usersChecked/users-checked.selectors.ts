import { createSelector } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";

const SELECT_USERS_CHECKED_STATE = (state: AppStoreState) => state.usersChecked;

export const SELECT_USERS_CHECKED = createSelector(
  SELECT_USERS_CHECKED_STATE,
  (state) => state.usersChecked
);
