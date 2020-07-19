import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "acceptance-data-third-form",
  templateUrl: "./acceptance-data-third-form.component.html",
  styleUrls: ["./acceptance-data-third-form.component.scss"],
})
export class AcceptanceDataThirdFormComponent implements OnInit {
  @Input() set thirdForm(form) {
    if (form) {
      this.form.patchValue(form);
    }
  }
  @Output("onSubmit") submit = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      colour: ["", [Validators.required]],
      texture: ["", [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
