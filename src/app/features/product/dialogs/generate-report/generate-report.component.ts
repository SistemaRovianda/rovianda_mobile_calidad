import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/Models/app-state.interface";

@Component({
  selector: "app-generate-report",
  templateUrl: "./generate-report.component.html",
  styleUrls: ["./generate-report.component.scss"],
})
export class GenerateReportComponent implements OnInit {
  entity: any;

  constructor(
    public modalController: ModalController,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss();
  }
}
