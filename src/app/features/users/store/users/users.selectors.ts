import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";

const USERS_STATE = (state: AppState) => state.users;

export const usersSelector = createSelector(
  USERS_STATE,
  (state) => state.users
);
