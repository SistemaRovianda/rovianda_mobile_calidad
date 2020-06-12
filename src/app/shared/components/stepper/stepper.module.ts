import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { StepperComponent } from "./stepper.component";

const DECLARATIONS = [StepperComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, IonicModule],
  exports: DECLARATIONS,
})
export class StepperModule {}
