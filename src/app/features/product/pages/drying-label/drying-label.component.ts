import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import * as fromActions from "../../store/drying-label/drying-label.actions";

@Component({
  selector: "app-drying-label",
  templateUrl: "./drying-label.component.html",
  styleUrls: ["./drying-label.component.scss"],
})
export class DryingLabelComponent implements OnInit {
  constructor(
    private _store: Store<AppStoreState>,
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  onBack(evt) {
    this.router.navigate(["/menu"]);
  }

  onSubmit(payload) {
    this._store.dispatch(fromActions.newProduct({ product: payload }));
  }
}
