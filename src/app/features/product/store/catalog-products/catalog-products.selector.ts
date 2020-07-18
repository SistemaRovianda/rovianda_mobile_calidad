import { createSelector } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";

const CATALOG_PRODUCTS = (state: AppStoreState) => state.catalogProducts;

export const fetchAllProducts = createSelector(
  CATALOG_PRODUCTS,
  (state) => state.products
);
