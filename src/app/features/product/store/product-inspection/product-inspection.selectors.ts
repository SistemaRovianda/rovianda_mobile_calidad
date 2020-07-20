import { AppState } from "@capacitor/core";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const PRODUCT_INSPECTION_STATE = (state: AppStoreState) =>
  state.productInspection;

export const idProductInspectorSuccess = createSelector(
  PRODUCT_INSPECTION_STATE,
  (state) => state.idProductInspectionSucess
);
