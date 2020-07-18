import { createSelector } from "@ngrx/store";
import { AppStoreState } from "../../../../shared/models/app-state.interface";

const CATALOG_LOTS = (state: AppStoreState) => state.catalogLots;

export const fetchAllLots = createSelector(CATALOG_LOTS, (state) => state.lots);

export const getProductWarehouseDriefId = createSelector(
  CATALOG_LOTS,
  (state, props) =>
    state.lots.products.find((product) => product.id == props.id)
);
