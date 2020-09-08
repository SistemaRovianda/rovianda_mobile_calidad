import { Action, createReducer, on } from "@ngrx/store";

import * as fromActions from "./product-inspection.actions";
import { newProductState } from "src/app/shared/models/app-state.interface";

const initialState: newProductState = {
  product: null,
  idProductInspectionSucess: null,
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

  on(fromActions.newProductSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    idProductInspectionSucess: id,
  })),

  on(fromActions.newProductError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function ProductInspectionReducer(
  state: newProductState,
  action: Action
) {
  return _productInspectionReducer(state, action);
}
