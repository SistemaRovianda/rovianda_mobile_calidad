import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/shared/services/product.service";
import {
  getPresentationOfProduct,
  loadProductsRovianda,
  loadProductsRoviandaSuccess,
  loadProductsRoviandsError,
  setPresentationOfProduct,
} from "./products-rovianda.actions";
import { exhaustMap, switchMap, catchError } from "rxjs/operators";
import { ProductRovianda } from "src/app/shared/models/product-inspection.interface";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductRoviandaEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProductsRoviandaEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsRovianda),
      exhaustMap((action) =>
        this.productService.getProductsRovianda().pipe(
          switchMap((products: ProductRovianda[]) => [
            loadProductsRoviandaSuccess({ products: products }),
          ]),
          catchError((error) => of(loadProductsRoviandsError(error)))
        )
      )
    )
  );

  getPresentationOfProduct$ = createEffect(()=>
          this.actions$.pipe(
            ofType(getPresentationOfProduct),
            exhaustMap((action)=>this.productService.getProductPresentations(action.productId).pipe(
              switchMap((presentations)=>[setPresentationOfProduct({presentations})]),
              catchError(()=>[setPresentationOfProduct({presentations:[]})])
            ))
          )
  )

}
