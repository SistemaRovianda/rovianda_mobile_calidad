import { Injectable } from "@angular/core";
import { UsersService } from "src/app/shared/services/users.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
  registerUsers,
  registerUsersError,
} from "./users.actions";
import { exhaustMap, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersEffects {
  constructor(
    private _actions$: Actions,
    private _usersService: UsersService
  ) {}

  fetchUsersEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fetchUsers),
      exhaustMap((action) =>
        this._usersService.getUsers().pipe(
          switchMap((users) => [fetchUsersSuccess({ users: users })]),
          catchError((error) => of(fetchUsersError(error)))
        )
      )
    )
  );

  registerUserEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(registerUsers),
      exhaustMap((action) =>
        this._usersService.addUser(action.processId, action.users).pipe(
          switchMap((_) => []),
          catchError((error) => of(registerUsersError(error)))
        )
      )
    )
  );
}
