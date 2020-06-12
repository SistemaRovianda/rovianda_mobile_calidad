import { createReducer, on } from "@ngrx/store";
import * as fromStepperActions from "./stepper.actions";
import { SteppersInterface } from "../../models/stepper.interface";

const STATE_INITIAL_STEPPER: SteppersInterface = {
  steps: [
    {
      value: true,
    },
    {
      value: false,
    },
  ],
};

export const StepperInitialReducer = createReducer<SteppersInterface>(
  STATE_INITIAL_STEPPER,
  on(fromStepperActions.stepperInit, (state, { steps }) => ({
    ...state,
    steps,
  })),
  on(fromStepperActions.stepperNext, (state, { num, step }) => ({
    ...state,
    steps: state.steps.concat().map((tempStep, i) => {
      if (i === num) {
        return { value: step };
      }
      return tempStep;
    }),
  })),
  on(fromStepperActions.stepperPrev, (state) => ({
    ...state,
    steps: state.steps.slice(1).concat({ value: false }),
  }))
);
