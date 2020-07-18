import { createAction, props } from "@ngrx/store";
import { lotResponse } from "src/app/shared/models/product-inspection.interface";

const FETCH_ALL_LOTS = "['LOTS'] Fetch All Lots";

const FETCH_ALL_LOTS_SUCCESS = "['LOTS'] Fetch All Lots Success";

const FETCH_ALL_LOTS_ERROR = "['LOTS'] Fetch All Lots Error";

export const fetchAllLots = createAction(
  FETCH_ALL_LOTS,
  props<{ typeLot: string; status: string }>()
);

export const fetchAllLotsSuccess = createAction(
  FETCH_ALL_LOTS_SUCCESS,
  props<{ lots: lotResponse[] }>()
);

export const fetchAllLotsError = createAction(
  FETCH_ALL_LOTS_ERROR,
  props<{ error: string }>()
);
