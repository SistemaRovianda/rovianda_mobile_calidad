import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { LotsService } from "src/app/shared/Services/lots.service";
import * as fromActions from "./catalog-lots.actions";

@Injectable({
  providedIn: "root",
})
export class CatalogLotsEffects {
  constructor(private actions$: Actions, private lotsService: LotsService) {}

  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchAllLots),
      exhaustMap((action) =>
        this.lotsService.getLots(action.typeLot, action.status).pipe(
          map((lots) => fromActions.fetchAllLotsSuccess({ lots })),
          catchError((error) => of(fromActions.fetchAllLotsError(error)))
        )
      )
    )
  );
}
