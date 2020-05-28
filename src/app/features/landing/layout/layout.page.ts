import { Component, OnInit } from "@angular/core";
import { SignIn } from "src/app/shared/models/signIn.interface";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { signIn } from "../store/login/login.action";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.page.html",
  styleUrls: ["./layout.page.scss"],
})
export class LayoutPage implements OnInit {
  constructor(private _store: Store<AppState>) {}

  ngOnInit() {}

  onLogin(signin: SignIn) {
    console.log("login", signin);
    this._store.dispatch(
      signIn({ email: signin.email, password: signin.password })
    );
  }
}
