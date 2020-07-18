import { createSelector } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";

const SELECT_LOGIN = (state: AppStoreState) => state.login;

export const SELECT_IS_LOADING = createSelector(
  SELECT_LOGIN,
  (state) => state.loading
);

export const SELECT_LOGIN_ERROR = createSelector(
  SELECT_LOGIN,
  (state) => state.error
);
