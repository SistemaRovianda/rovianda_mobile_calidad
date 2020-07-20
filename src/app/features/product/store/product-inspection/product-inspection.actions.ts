import { createAction, props } from "@ngrx/store";
import { ProductInspection } from "src/app/shared/models/product-inspection.interface";

const ADD_PRODUCT = "['DRYING'] Add Drying";

const ADD_PRODUCT_SUCCESS = "['DRYING'] Add Drying Success";

const ADD_PRODUCT_ERROR = "['DRYING'] Add Drying Error";

export const newProduct = createAction(
  ADD_PRODUCT,
  props<{ product: ProductInspection }>()
);

export const newProductSuccess = createAction(
  ADD_PRODUCT_SUCCESS,
  props<{ id: number }>()
);

export const newProductError = createAction(
  ADD_PRODUCT_ERROR,
  props<{ error: string }>()
);
