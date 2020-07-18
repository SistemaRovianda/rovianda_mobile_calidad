import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./catalog-products.actions";
import { ProductInterface } from "src/app/shared/models/product-inspection.interface";

export interface newState {
  products: ProductInterface[];
  error: string;
  loading: boolean;
}

const initialState: newState = {
  products: [],
  error: null,
  loading: false,
};

export const catalogProductsReducer = createReducer<newState>(
  initialState,
  on(fromActions.fetchAllProducts, (state) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),

  on(fromActions.fetchAllProductsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
