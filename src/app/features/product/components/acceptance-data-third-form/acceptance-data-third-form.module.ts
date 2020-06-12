import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AcceptanceDataThirdFormComponent } from "./acceptance-data-third-form.component";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

const COMMON_IMPORTS = [CommonModule, IonicModule, ReactiveFormsModule];

const COMMON_DECLARATIONS = [AcceptanceDataThirdFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class AcceptanceDataThirdFormModule {}
