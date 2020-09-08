import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { registerUsers } from "../../store/users/users.actions";
import { AppStoreState } from "src/app/shared/models/app-state.interface";

@Component({
  selector: "app-confirm-add-user",
  templateUrl: "./confirm-add-user.component.html",
  styleUrls: ["./confirm-add-user.component.scss"],
})
export class ConfirmAddUserComponent implements OnInit {
  @Input() users;
  @Input() id;

  constructor(
    private store: Store<AppStoreState>,
    private _modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  accept() {
    this.store.dispatch(
      registerUsers({ processId: this.id, users: this.users })
    );
    this._modalCtrl.dismiss();
  }

  cancel() {
    this._modalCtrl.dismiss();
  }
}
