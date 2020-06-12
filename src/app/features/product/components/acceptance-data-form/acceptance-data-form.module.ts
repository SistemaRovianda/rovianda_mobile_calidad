import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AcceptanceDataFormComponent } from "./acceptance-data-form.component";

const COMMON_IMPORTS = [CommonModule, IonicModule, ReactiveFormsModule];

const COMMON_DECLARATIONS = [AcceptanceDataFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class AcceptanceDataFormModule {}
