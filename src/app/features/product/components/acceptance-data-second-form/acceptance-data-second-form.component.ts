import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "acceptance-data-second-form",
  templateUrl: "./acceptance-data-second-form.component.html",
  styleUrls: ["./acceptance-data-second-form.component.scss"],
})
export class AcceptanceDataSecondFormComponent implements OnInit {
  @Input() set secondForm(form) {
    if (form) {
      this.form.patchValue(form);
    }
  }
  @Output("onSubmit") submit = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      packagingControl: ["", [Validators.required]],
      foreignMatter: ["", [Validators.required]],
      transport: ["", [Validators.required]],
      weightPerPiece: ["", [Validators.required]],
      temperature: ["", [Validators.required]],
      odor: ["", [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
