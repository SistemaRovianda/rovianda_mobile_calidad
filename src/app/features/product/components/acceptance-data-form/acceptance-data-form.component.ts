import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import {
  ProductInterface,
  Products,
  ProductLot,
} from "src/app/shared/models/product-inspection.interface";
import isEmpty from "lodash.isempty";
import * as moment from "moment";

@Component({
  selector: "acceptance-data-form",
  templateUrl: "./acceptance-data-form.component.html",
  styleUrls: ["./acceptance-data-form.component.scss"],
})
export class AcceptanceDataFormComponent implements OnInit {
  @Input() set generalData(form) {
    if (form) {
      this.form.patchValue(form);
    }
  }
  @Output("onSubmit") submit = new EventEmitter();

  form: FormGroup;
  filterProducts: ProductLot[];

  @Input() lots: Products[] = [];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      productId: ["", [Validators.required]],
      lotId: ["", [Validators.required]],
      expirationDate: ["", [Validators.required, whitespaceValidator]],
      numberPackages: ["", [Validators.required, whitespaceValidator]],
      observations: [null, [Validators.required, whitespaceValidator]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { expirationDate, ...value } = this.form.value;

    const payload = {
      ...value,
      expirationDate: moment(expirationDate).format("YYYY-MM-DD"),
    };

    this.submit.emit(payload);
  }

  change(evt) {
    this.form.get("productId").setValue(evt.detail.value.productId);
    this.form.get("lotId").reset();

    this.filterProducts = evt.detail.value.lot;
  }

  disabled(e) {
    return isEmpty(e);
  }
}
