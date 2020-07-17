import { AuthenticationUser } from "./authentication-user.interface";
import { LoginState } from "src/app/features/landing/store/login/login.reducer";
import { SteppersInterface } from "./stepper.interface";
import { UsersState } from "src/app/features/users/store/users/users.reducer";
import { UsersCheckedState } from "src/app/features/users/store/usersChecked/users-checked.reducer";

export interface AppState {
  auth: AuthenticationUser;
  login: LoginState;
  stepper: SteppersInterface;
  users: UsersState;
  usersChecked: UsersCheckedState;
}
