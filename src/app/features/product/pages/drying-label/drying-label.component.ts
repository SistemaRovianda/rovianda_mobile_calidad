import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { signOut } from "../../../../features/landing/store/login/login.action";
import { ModalController } from "@ionic/angular";

import * as fromActions from "../../store/drying-label/drying-label.actions";
import { GenerateReportComponent } from "../../dialogs/generate-report/generate-report.component";

@Component({
  selector: "app-drying-label",
  templateUrl: "./drying-label.component.html",
  styleUrls: ["./drying-label.component.scss"],
})
export class DryingLabelComponent implements OnInit {
  constructor(
    private _store: Store<AppStoreState>,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  onBack(evt) {
    this._store.dispatch(signOut());
  }

  onSubmit(payload) {
    this._store.dispatch(fromActions.newProduct({ product: payload }));
  }
}
