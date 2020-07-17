import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { signOut } from "../../../../features/landing/store/login/login.action";
import { ModalController } from "@ionic/angular";
import { GenerateReportComponent } from "../../dialogs/generate-report/generate-report.component";

@Component({
  selector: "app-drying-label",
  templateUrl: "./drying-label.component.html",
  styleUrls: ["./drying-label.component.scss"],
})
export class DryingLabelComponent implements OnInit {
  constructor(
    private _store: Store<AppState>,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  onBack(evt) {
    this._store.dispatch(signOut());
  }

  onSubmit() {
    this.openModal(1);
  }

  async openModal(exitLot: any) {
    const modal = await this.modalController.create({
      component: GenerateReportComponent,
      cssClass: "modal-size",
      componentProps: {
        exitLot: exitLot,
      },
    });
    return await modal.present();
  }
}
