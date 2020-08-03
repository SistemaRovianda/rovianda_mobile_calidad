import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "@capacitor/core";
import { loadProductsRovianda } from "src/app/features/product/store/products-rovianda/products-rovianda.actions";

@Injectable()
export class ProductsRoviandaResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    this._store.dispatch(loadProductsRovianda());
    return true;
  }
}
