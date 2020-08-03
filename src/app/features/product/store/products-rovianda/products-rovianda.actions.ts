import { createAction, props } from "@ngrx/store";
import { ProductRovianda } from "src/app/shared/models/product-inspection.interface";

const LOAD_PRODUCTS_ROVIANDA = "[Products-Rovianda] Load Products";

const LOAD_PRODUCTS_ROVIANDA_SUCCESS =
  "[Product-rovianda]Load Products rovianda success";

const LOAD_PRODUCTS_ROVIANDA_ERROR =
  "[Products-rovianda]Load Products rovianda error";

export const loadProductsRovianda = createAction(LOAD_PRODUCTS_ROVIANDA);

export const loadProductsRoviandaSuccess = createAction(
  LOAD_PRODUCTS_ROVIANDA_SUCCESS,
  props<{ products: ProductRovianda[] }>()
);

export const loadProductsRoviandsError = createAction(
  LOAD_PRODUCTS_ROVIANDA_ERROR,
  props<{ error: string }>()
);
