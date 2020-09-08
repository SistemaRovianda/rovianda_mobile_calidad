import { Component, Input, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { registerUsers } from "../../store/users/users.actions";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { Router } from "@angular/router";

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
    private _modalCtrl: ModalController,
    private route: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  accept() {
    this.store.dispatch(
      registerUsers({ processId: this.id, users: this.users })
    );

    this.toastSuccessDownload();
    this.route.navigate([`/menu`]);

    this._modalCtrl.dismiss();
  }

  cancel() {
    this._modalCtrl.dismiss();
  }

  async toastSuccessDownload() {
    const toast = await this.toastCtrl.create({
      message: "Se guardo con exito",
      duration: 2000,
      color: "success",
    });

    return await toast.present();
  }
}
