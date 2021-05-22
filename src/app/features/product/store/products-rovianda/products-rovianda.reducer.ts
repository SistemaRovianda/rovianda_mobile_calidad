import { ProductPresentation, ProductRovianda } from "src/app/shared/models/product-inspection.interface";
import { createReducer, on, Action } from "@ngrx/store";
import {
  loadProductsRovianda,
  loadProductsRoviandaSuccess,
  loadProductsRoviandsError,
  setPresentationOfProduct,
} from "./products-rovianda.actions";

export interface ProductsRoviandaState {
  loading: boolean;
  products: ProductRovianda[];
  error: string;
  presentations:ProductPresentation[]
}

const initialState: ProductsRoviandaState = {
  loading: false,
  products: [],
  error: null,
  presentations:[]
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
  })),
  on(setPresentationOfProduct,(state,{presentations}) => ({...state,presentations}) )
);

export function productsRoviandaReducer(
  state: ProductsRoviandaState,
  action: Action
) {
  return _productsRoviandaReducer(state, action);
}
