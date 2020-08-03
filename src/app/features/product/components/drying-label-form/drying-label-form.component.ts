import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import * as moment from "moment";
import { Observable } from "rxjs";
import { ProductRovianda } from "src/app/shared/models/product-inspection.interface";
import { Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { productsRoviandaSelector } from "../../store/products-rovianda/products-rovianda.selectors";

@Component({
  selector: "drying-label-form",
  templateUrl: "./drying-label-form.component.html",
  styleUrls: ["./drying-label-form.component.scss"],
})
export class DryingLabelFormComponent implements OnInit {
  @Output("onSubmit") submit = new EventEmitter();

  form: FormGroup;

  productsRovianda$: Observable<ProductRovianda[]>;

  constructor(private fb: FormBuilder, private _store: Store<AppStoreState>) {
    this.form = fb.group({
      productId: ["", [Validators.required, whitespaceValidator]],
      lotId: ["", [Validators.required, whitespaceValidator]],
      dateEntrance: [moment().format("YYYY-MM-DD"), [Validators.required]],
      dateOutput: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    this.productsRovianda$ = this._store.select(productsRoviandaSelector);
  }

  onSubmit() {
    let labelForm = {
      ...this.form.value,
      dateEntrance: new Date(this.form.get("dateEntrance").value)
        .toISOString()
        .split("T")[0],
      dateOutput: new Date(this.form.get("dateOutput").value)
        .toISOString()
        .split("T")[0],
    };
    this.submit.emit(labelForm);
  }

  get minEndDate() {
    const start = this.form.get("dateEntrance").value;
    const end = moment(start).add(2, "days").format("YYYY-MM-DD");

    return end;
  }
}
