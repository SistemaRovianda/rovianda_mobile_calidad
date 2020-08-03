import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const PRODUCTS_ROVIANDA_STATE = (state: AppStoreState) =>
  state.productsRovianda;

export const productsRoviandaSelector = createSelector(
  PRODUCTS_ROVIANDA_STATE,
  (state) => state.products
);
