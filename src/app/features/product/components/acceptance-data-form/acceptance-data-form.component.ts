import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import { ProductInterface } from "src/app/shared/models/product-inspection.interface";
import isEmpty from "lodash.isempty";

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
  filterProducts: ProductInterface[];

  @Input() lots = [];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      product: ["", [Validators.required, whitespaceValidator]],
      newLote: ["", [Validators.required, whitespaceValidator]],
      date: ["", [Validators.required, whitespaceValidator]],
      piece: ["", [Validators.required, whitespaceValidator]],
      observations: [null],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  onChangeProduct(evt) {
    console.log("product: ", evt.detail.value);
    this.form.get("productId").setValue(evt.detail.value.id);
  }

  change() {
    const value = this.form.get("loteId").value;
    this.filterProducts = value.products;
  }

  disabled(e) {
    return isEmpty(e);
  }
}
