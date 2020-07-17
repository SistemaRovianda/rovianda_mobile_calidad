import { createAction, props } from "@ngrx/store";
import { UsersCheckers } from "src/app/shared/models/user.interface";

const FETCH_USERS_CHECKED = "[USERS] Fetch Users Reviewed";

const FETCH_USERS_CHECKED_SUCCESS = "[USERS] Fetch Users Reviewed Success";

const FETCH_USERS_CHECKED_FAILURED = "[USERS] Fetch Users Reviewed Failured";

export const fetchUsersChecked = createAction(
  FETCH_USERS_CHECKED,
  props<{ processId: string }>()
);

export const fetchUsersCheckedSuccess = createAction(
  FETCH_USERS_CHECKED_SUCCESS,
  props<{ usersChecked: UsersCheckers }>()
);

export const fetchUsersCheckedFailured = createAction(
  FETCH_USERS_CHECKED_FAILURED,
  props<{ error: string }>()
);
