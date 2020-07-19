import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import * as moment from "moment";

@Component({
  selector: "drying-label-form",
  templateUrl: "./drying-label-form.component.html",
  styleUrls: ["./drying-label-form.component.scss"],
})
export class DryingLabelFormComponent implements OnInit {
  @Output("onSubmit") submit = new EventEmitter();
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      productId: ["", [Validators.required, whitespaceValidator]],
      lotId: ["", [Validators.required, whitespaceValidator]],
      dateEntrance: [moment().format("MM/DD/YYYY"), [Validators.required]],
      dateOutput: ["", [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  get minEndDate() {
    const start = this.form.get("dateEntrance").value;
    const end = moment(start).add(2, "days").format("YYYY-MM-DD");

    return end;
  }
}
