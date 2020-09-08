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
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url: string;

  auth: Auth;

  constructor(
    private http: HttpClient,
    private _router: Router,
    private _storage: Storage,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}`;

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o",
        authDomain: "rovianda-88249.firebaseapp.com",
      });
    }

    // firebase.initializeApp({
    //   apiKey: "AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o",
    //   authDomain: "rovianda-88249.firebaseapp.com",
    // });

    this.auth = firebase.auth();
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

  isAuth(): Observable<any> {
    return from(
      this._storage.get("token").then((token) => {
        console.log("Token: ", token);
        if (token) return Promise.resolve(true);
        return false;
      })
    ).pipe(map((val) => val));
  }

  verifyRole(): Observable<boolean> {
    return from(
      this._storage.get("role").then((role) => {
        console.log("rol: ", role);
        if (role != null && role == "QUALITY") return Promise.resolve(true);
        return Promise.resolve(false);
      })
    ).pipe(map((res) => res));
  }

  getUID() {
    return this.auth.currentUser.uid;
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
    this._storage.clear().then((res) => {
      console.log("Clear Storage");
    });
    return from(
      this.auth.signOut().then(() => {
        this._router.navigate(["/"], { replaceUrl: true });
      })
    );
  }
}
