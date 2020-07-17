import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-confirm-report",
  templateUrl: "./confirm-report.component.html",
  styleUrls: ["./confirm-report.component.scss"],
})
export class ConfirmReportComponent implements OnInit {
  @Input() id;

  constructor(private _modalCtrl: ModalController, private _router: Router) {}

  ngOnInit() {}

  accept() {
    this._router.navigate([`/product/${this.id}/report`]);
    this._modalCtrl.dismiss();
  }

  cancel() {
    console.log("cancel");
    this._modalCtrl.dismiss();
  }
}
