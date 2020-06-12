import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";

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
}
