import { AuthenticationUser } from "./authentication-user.interface";
import { LoginState } from "src/app/features/landing/store/login/login.reducer";
import { SteppersInterface } from "./stepper.interface";
import { UsersState } from "src/app/features/users/store/users/users.reducer";
import { UsersCheckedState } from "src/app/features/users/store/usersChecked/users-checked.reducer";
import { newState } from "src/app/features/product/store/catalog-products/catalog-products.reducer";
import { stateLots } from "src/app/features/product/store/catalog-lots/catalog-lots.reducer";

export interface AppStoreState {
  auth: AuthenticationUser;
  login: LoginState;
  stepper: SteppersInterface;
  users: UsersState;
  usersChecked: UsersCheckedState;
  catalogProducts: newState;
  catalogLots: stateLots;
}

export interface newProductState {
  product: any;
  error: string;
  loading: boolean;
}
