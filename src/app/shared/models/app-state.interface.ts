import { AuthenticationUser } from "./authentication-user.interface";
import { LoginState } from "src/app/features/landing/store/login/login.reducer";
import { SteppersInterface } from "./stepper.interface";

export interface AppState {
  auth: AuthenticationUser;
  login: LoginState;
  stepper: SteppersInterface;
}
