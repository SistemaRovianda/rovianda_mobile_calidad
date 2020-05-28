import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../../models/app-state.interface";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";

export const reducers: ActionReducerMap<AppState> = {
  auth: authenticationReducer,
  login: loginReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
