import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { catalogLotsReducer } from "src/app/features/product/store/catalog-lots/catalog-lots.reducer";
import { catalogProductsReducer } from "src/app/features/product/store/catalog-products/catalog-products.reducer";
import { ProductInspectionReducer } from "src/app/features/product/store/product-inspection/product-inspection.reducer";
import { usersReducer } from "src/app/features/users/store/users/users.reducer";
import { usersCheckedReducer } from "src/app/features/users/store/usersChecked/users-checked.reducer";
import { AppStoreState } from "../../models/app-state.interface";
import { StepperInitialReducer } from "../stepper/stepper.reducer";
import { DryingLabelReducer } from "src/app/features/product/store/drying-label/drying-label.reducer";
import { productsRoviandaReducer } from "src/app/features/product/store/products-rovianda/products-rovianda.reducer";

export const reducers: ActionReducerMap<AppStoreState> = {
  auth: authenticationReducer,
  login: loginReducer,
  stepper: StepperInitialReducer,
  users: usersReducer,
  usersChecked: usersCheckedReducer,
  catalogProducts: catalogProductsReducer,
  catalogLots: catalogLotsReducer,
  productInspection: ProductInspectionReducer,
  dryingLabel: DryingLabelReducer,
  productsRovianda: productsRoviandaReducer,
};

export const metaReducers: MetaReducer<AppStoreState>[] = [];
