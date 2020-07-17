import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../../models/app-state.interface";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { StepperInitialReducer } from "../stepper/stepper.reducer";
import { usersReducer } from "src/app/features/users/store/users/users.reducer";
import { usersCheckedReducer } from "src/app/features/users/store/usersChecked/users-checked.reducer";

export const reducers: ActionReducerMap<AppState> = {
  auth: authenticationReducer,
  login: loginReducer,
  stepper: StepperInitialReducer,
  users: usersReducer,
  usersChecked: usersCheckedReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
