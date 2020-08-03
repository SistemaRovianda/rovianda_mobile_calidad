import { ProductRovianda } from "src/app/shared/models/product-inspection.interface";
import { createReducer, on, Action } from "@ngrx/store";
import {
  loadProductsRovianda,
  loadProductsRoviandaSuccess,
  loadProductsRoviandsError,
} from "./products-rovianda.actions";

export interface ProductsRoviandaState {
  loading: boolean;
  products: ProductRovianda[];
  error: string;
}

const initialState: ProductsRoviandaState = {
  loading: false,
  products: [],
  error: null,
};

const _productsRoviandaReducer = createReducer<ProductsRoviandaState>(
  initialState,
  on(loadProductsRovianda, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadProductsRoviandaSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(loadProductsRoviandsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function productsRoviandaReducer(
  state: ProductsRoviandaState,
  action: Action
) {
  return _productsRoviandaReducer(state, action);
}
