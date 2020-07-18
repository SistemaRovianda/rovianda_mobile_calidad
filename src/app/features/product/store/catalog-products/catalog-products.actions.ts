import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "src/app/shared/models/product-inspection.interface";

const FETCH_ALL_PRODUCTS = "['PRODUCTS'] Fetch All Products";

const FETCH_ALL_PRODUCTS_SUCCESS = "['PRODUCTS'] Fetch All Products Success";

const FETCH_ALL_PRODUCTS_ERROR = "['PRODUCTS'] Fetch All Products Error";

export const fetchAllProducts = createAction(FETCH_ALL_PRODUCTS);

export const fetchAllProductsSuccess = createAction(
  FETCH_ALL_PRODUCTS_SUCCESS,
  props<{ products: ProductInterface[] }>()
);

export const fetchAllProductsError = createAction(
  FETCH_ALL_PRODUCTS_ERROR,
  props<{ error: string }>()
);
