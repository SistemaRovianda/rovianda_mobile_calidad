import { createAction, props } from "@ngrx/store";

const ADD_PRODUCTS = "['PRODUCTS'] Add Products";

const ADD_PRODUCTS_SUCCESS = "['PRODUCTS'] Add Products Success";

const ADD_PRODUCTS_ERROR = "['PRODUCTS'] Add Products Error";

export const newProduct = createAction(
  ADD_PRODUCTS,
  props<{ product: DryingInterface }>()
);

export const newProductSuccess = createAction(
  ADD_PRODUCTS_SUCCESS,
  props<{ id: number }>()
);

export const newProductError = createAction(
  ADD_PRODUCTS_ERROR,
  props<{ error: string }>()
);
