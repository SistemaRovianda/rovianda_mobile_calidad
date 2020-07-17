import { Injectable } from "@angular/core";
import { UsersService } from "src/app/shared/services/users.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {
  fetchUsersChecked,
  fetchUsersCheckedSuccess,
  fetchUsersCheckedFailured,
} from "./users-checked.actions";
import { exhaustMap, switchMap, catchError } from "rxjs/operators";
import { UsersCheckers } from "src/app/shared/models/user.interface";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersCheckedEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  fetchUsersCheckedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsersChecked),
      exhaustMap((action) =>
        this.usersService.getUsersChecked(action.processId).pipe(
          switchMap((usersChecked: UsersCheckers) => [
            fetchUsersCheckedSuccess({ usersChecked: usersChecked }),
          ]),
          catchError((error) => of(fetchUsersCheckedFailured(error)))
        )
      )
    )
  );
}
