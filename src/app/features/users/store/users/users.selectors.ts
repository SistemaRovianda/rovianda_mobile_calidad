import { createSelector } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";

const USERS_STATE = (state: AppStoreState) => state.users;

export const usersSelector = createSelector(
  USERS_STATE,
  (state) => state.users
);
