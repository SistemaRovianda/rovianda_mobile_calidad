import { NgModule } from "@angular/core";
import { LoginFormComponent } from "./login-form.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const DECLARATIONS = [LoginFormComponent];

const IMPORTS = [CommonModule, IonicModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  exports: DECLARATIONS,
})
export class LoginFormModule {}
