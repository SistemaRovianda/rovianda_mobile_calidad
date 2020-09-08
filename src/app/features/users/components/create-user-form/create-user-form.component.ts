import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { Store } from "@ngrx/store";
import { from, Observable } from "rxjs";
import { usersSelector } from "src/app/features/users/store/users/users.selectors";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { UserRegistered } from "src/app/shared/models/user.interface";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";

@Component({
  selector: "create-user-form",
  templateUrl: "./create-user-form.component.html",
  styleUrls: ["./create-user-form.component.scss"],
})
export class CreateUserFormComponent implements OnInit {
  @Output("onSubmit") submit = new EventEmitter();

  form: FormGroup;

  nameElaborated: Observable<string>;

  job: Observable<string>;

  users: Observable<UserRegistered[]>;

  userVerifyJob: string;

  constructor(
    private fb: FormBuilder,
    private storage: Storage,
    private store: Store<AppStoreState>
  ) {
    this.form = fb.group({
      nameElaborated: ["", [Validators.required, whitespaceValidator]],
      jobElaborated: ["", [Validators.required]],
      nameVerify: ["", [Validators.required]],
      jobVerify: ["", [Validators.required, whitespaceValidator]],
    });

    this.nameElaborated = from(
      this.storage.get("currentUser").then((res) => Promise.resolve(res))
    );

    this.job = from(
      this.storage.get("job").then((res) => Promise.resolve(res))
    );

    this.users = this.store.select(usersSelector);
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
      nameVerify: nameVerify.fullName,
      jobVerify: jobVerify.trim(),
    };

    this.submit.emit(user);
  }

  selectNameVerify(evt) {
    this.userVerifyJob = evt.detail.value.job;
  }
}
