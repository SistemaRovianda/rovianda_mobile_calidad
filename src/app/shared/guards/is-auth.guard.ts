import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../Services/auth.service";
import { mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class IsAuthGuard implements CanActivate {
  constructor(private _authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    return this._authService.isAuth().pipe(
      mergeMap(
        (val) => this._authService.verifyRole(),
        (val1, val2) => {
          console.log("[isAuth] mergeMap: token: ", val1, "role: ", val2);
          return !val1 && !val2 ? true : false;
        }
      )
    );
  }
}
