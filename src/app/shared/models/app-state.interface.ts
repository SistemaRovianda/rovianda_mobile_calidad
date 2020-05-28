import { AuthenticationUser } from "./authentication-user.interface";
import { LoginState } from "src/app/features/landing/store/login/login.reducer";

export interface AppState {
  auth: AuthenticationUser;
  login: LoginState;
}
