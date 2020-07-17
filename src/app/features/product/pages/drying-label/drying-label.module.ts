import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { DryingLabelFormModule } from "../../components/drying-label-form/drying-label-form.module";
import { DryingLabelComponent } from "./drying-label.component";
import { GenerateReportModule } from "../../dialogs/generate-report/generate-report.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  RouterModule,
  TitleHeaderModule,
  DryingLabelFormModule,
  GenerateReportModule,
];

const COMMON_DECLARTIONS = [DryingLabelComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARTIONS,
  exports: COMMON_DECLARTIONS,
})
export class DryingLabelModule {}
