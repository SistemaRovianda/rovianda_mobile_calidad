import { NgModule } from "@angular/core";
import { ConfirmReportComponent } from "./confirm-report.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

const COMMON_DECLARATIONS = [ConfirmReportComponent];

const COMMON_IMPORTS = [CommonModule, IonicModule];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class ConfirmReportModule {}
