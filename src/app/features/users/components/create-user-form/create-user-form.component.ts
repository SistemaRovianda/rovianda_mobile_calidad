import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";

@Component({
  selector: "create-user-form",
  templateUrl: "./create-user-form.component.html",
  styleUrls: ["./create-user-form.component.scss"],
})
export class CreateUserFormComponent implements OnInit {
  @Output("onSubmit") submit = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nameElaborated: ["", [Validators.required, whitespaceValidator]],
      jobElaborated: ["", [Validators.required]],
      nameVerify: ["", [Validators.required]],
      jobVerify: ["", [Validators.required, whitespaceValidator]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const {
      nameElaborated,
      jobElaborated,
      nameVerify,
      jobVerify,
    } = this.form.value;
    const user = {
      nameElaborated: nameElaborated.trim(),
      jobElaborated: jobElaborated.trim(),
      nameVerify: nameVerify.trim(),
      jobVerify: jobVerify.trim(),
    };
    this.submit.emit(user);
  }
}
