import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { StepperModule } from "src/app/shared/components/stepper/stepper.module";
import { ProductInspectionComponent } from "./product-inspection.component";
import { AcceptanceDataFormModule } from "../../components/acceptance-data-form/acceptance-data-form.module";
import { AcceptanceDataThirdFormModule } from "../../components/acceptance-data-third-form/acceptance-data-third-form.module";
import { AcceptanceDataSecondFormModule } from "../../components/acceptance-data-second-form/acceptance-data-second-form.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  RouterModule,
  TitleHeaderModule,
  StepperModule,
  AcceptanceDataFormModule,
  AcceptanceDataSecondFormModule,
  AcceptanceDataThirdFormModule,
];

const COMMON_DECLARTIONS = [ProductInspectionComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARTIONS,
  exports: COMMON_DECLARTIONS,
})
export class ProductInspectionModule {}
