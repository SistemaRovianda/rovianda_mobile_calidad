import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "@capacitor/core";
import { fetchUsers } from "src/app/features/users/store/users/users.actions";

@Injectable()
export class UsersResolve implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    this._store.dispatch(fetchUsers());
    return true;
  }
}
