import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppStoreState } from "../../models/app-state.interface";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { StepperInitialReducer } from "../stepper/stepper.reducer";
import { usersReducer } from "src/app/features/users/store/users/users.reducer";
import { usersCheckedReducer } from "src/app/features/users/store/usersChecked/users-checked.reducer";
import { catalogProductsReducer } from "src/app/features/product/store/catalog-products/catalog-products.reducer";
import { catalogLotsReducer } from "src/app/features/product/store/catalog-lots/catalog-lots.reducer";

export const reducers: ActionReducerMap<AppStoreState> = {
  auth: authenticationReducer,
  login: loginReducer,
  stepper: StepperInitialReducer,
  users: usersReducer,
  usersChecked: usersCheckedReducer,
  catalogProducts: catalogProductsReducer,
  catalogLots: catalogLotsReducer,
};

export const metaReducers: MetaReducer<AppStoreState>[] = [];
