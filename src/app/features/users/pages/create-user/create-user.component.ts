import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { CreateUserFormComponent } from "../../components/create-user-form/create-user-form.component";
import { ConfirmAddUserComponent } from "../../dialogs/confirm-add-user/confirm-add-user.component";
import { ConfirmReportComponent } from "../../dialogs/confirm-report/confirm-report.component";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
  @ViewChild(CreateUserFormComponent, { static: false })
  usersForm: CreateUserFormComponent;

  users;

  path: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<AppStoreState>,
    private _modalCtrl: ModalController
  ) {
    this.path = `/product/${this.route.snapshot.paramMap.get("id")}/revisions`;
  }

  loading$;

  ngOnInit() {}

  onSubmitUsers(users) {
    this.confirmAddUsers(users);
  }

  addUsers() {
    this.usersForm.onSubmit();
  }

  async confirmAddUsers(users) {
    const modal = await this._modalCtrl.create({
      component: ConfirmAddUserComponent,
      cssClass: "modal-size-user",
      componentProps: {
        id: this.route.snapshot.paramMap.get("id"),
        users: users,
      },
    });

    return await modal.present();
  }

  onBackPage(evt) {
    this.router.navigate([`/product/inspection`]);
  }
}
