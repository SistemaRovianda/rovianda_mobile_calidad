import { Injectable, Inject } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { AuthenticationUser } from "../models/authentication-user.interface";
import Auth = firebase.auth.Auth;
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url: string;

  auth: Auth;

  constructor(
    private http: HttpClient,
    private _router: Router,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    firebase.initializeApp({
      apiKey: "AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o",
      authDomain: "rovianda-88249.firebaseapp.com",
    });

    this.auth = firebase.auth();

    this.url = `${endpoint}`;
  }

  signIn(email: string, password: string): Observable<any> {
    return from(
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) =>
          Promise.all([Promise.resolve(userCredentials.user.uid)])
        )
    ).pipe(map(([uid]) => ({ uid })));
  }

  getUserData(uid: string): Observable<AuthenticationUser> {
    return this.http.get<AuthenticationUser>(`${this.url}/user/${uid}`);
  }

  isAuth(): boolean {
    return (
      localStorage.getItem("token") != null &&
      localStorage.getItem("role") == "Empaquetado"
    );
  }

  getTokenCurrentUser(): Observable<any> {
    return from(
      this.auth.currentUser
        .getIdToken()
        .then((res) => {
          return Promise.all([Promise.resolve(res)]);
        })
        .catch((error) => {
          return Promise.all([error]);
        })
    ).pipe(map(([token]) => ({ token })));
  }

  signOut(): Observable<any> {
    localStorage.clear();
    return from(
      this.auth.signOut().then(() => {
        this._router.navigate(["/"], { replaceUrl: true });
      })
    );
  }
}
