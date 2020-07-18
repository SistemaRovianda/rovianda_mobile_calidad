import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { ProductService } from "src/app/shared/Services/product.service";
import * as fromActions from "./catalog-products.actions";

@Injectable({
  providedIn: "root",
})
export class CatalogProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}

  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchAllProducts),
      exhaustMap(() =>
        this.productsService.getAllProductsDried().pipe(
          map((products) => fromActions.fetchAllProductsSuccess({ products })),
          catchError((error) => of(fromActions.fetchAllProductsError(error)))
        )
      )
    )
  );
}
