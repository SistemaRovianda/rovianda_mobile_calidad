import { createSelector } from "@ngrx/store";
import { AppStoreState } from "../../models/app-state.interface";

const SELECT_STEPPER_INITIAL = (state: AppStoreState) => state.stepper;

export const SELECT_STEPS = createSelector(
  SELECT_STEPPER_INITIAL,
  (state) => state.steps
);

export const SELECT_STEP = (position) =>
  createSelector(SELECT_STEPS, (state) => state[position].value);
