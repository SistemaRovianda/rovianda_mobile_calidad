import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { registerUsers } from "../../store/users/users.actions";
import { AppState } from "src/app/shared/models/app-state.interface";

@Component({
  selector: "app-confirm-add-user",
  templateUrl: "./confirm-add-user.component.html",
  styleUrls: ["./confirm-add-user.component.scss"],
})
export class ConfirmAddUserComponent implements OnInit {
  @Input() users;
  @Input() id;

  constructor(
    private store: Store<AppState>,
    private _modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  accept() {
    console.log("[GUARDAR] processId: ", this.id, " users: ", this.users);
    this.store.dispatch(
      registerUsers({ processId: this.id, users: this.users })
    );
    this._modalCtrl.dismiss();
  }

  cancel() {
    this._modalCtrl.dismiss();
  }
}
