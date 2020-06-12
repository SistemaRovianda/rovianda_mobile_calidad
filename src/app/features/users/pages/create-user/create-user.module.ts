import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { RouterModule } from "@angular/router";
import { CreateUserComponent } from "./create-user.component";
import { CreateUserFormModule } from "../../components/create-user-form/create-user-form.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  RouterModule,
  CreateUserFormModule,
];

const COMMON_DECLARATIONS = [CreateUserComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class CreateUserModule {}
