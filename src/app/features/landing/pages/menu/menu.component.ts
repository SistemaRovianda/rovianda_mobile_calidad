import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { signOut } from "../../store/login/login.action";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuPageComponent implements OnInit {
  constructor(private _store: Store<AppStoreState>) {}

  ngOnInit() {}

  onBack(evt) {
    this._store.dispatch(signOut());
  }
}
