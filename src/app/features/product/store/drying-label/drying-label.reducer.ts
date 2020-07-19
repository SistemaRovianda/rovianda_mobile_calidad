import { Action, createReducer, on } from "@ngrx/store";

import * as fromActions from "./drying-label.actions";
import { newProductState } from "src/app/shared/models/app-state.interface";

const initialState: newProductState = {
  product: null,
  error: null,
  loading: false,
};

const _productInspectionReducer = createReducer<newProductState>(
  initialState,
  on(fromActions.newProduct, (state, { product }) => ({
    ...state,
    product,
    loading: true,
  })),

  on(fromActions.newProductSuccess, (state) => ({
    ...state,
    loading: false,
  })),

  on(fromActions.newProductError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function DryingLabelReducer(state: newProductState, action: Action) {
  return _productInspectionReducer(state, action);
}
