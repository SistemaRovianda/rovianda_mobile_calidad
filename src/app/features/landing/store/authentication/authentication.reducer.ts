import { createReducer, on } from "@ngrx/store";
import { AuthenticationUser } from "src/app/shared/models/authentication-user.interface";
import {
  loadUser,
  loadCurrentTokenSuccess,
  clearUser,
} from "./authentication.action";

export const authenticationReducer = createReducer<AuthenticationUser>(
  {
    token: null,
    email: null,
    name: null,
    lastSurname: null,
    firstSurname: null,
    uid: null,
    rol: null,
    job: null,
  },

  on(loadUser, (state, userCredentials) => ({
    ...state,
    ...userCredentials,
  })),

  on(loadCurrentTokenSuccess, (state, { currentToken }) => ({
    ...state,
    currentToken,
  })),

  on(clearUser, (state) => ({
    ...state,
    uid: null,
    email: null,
    rol: null,
    job: null,
    name: null,
    firstSurname: null,
    lastSurname: null,
    token: null,
  }))
);
