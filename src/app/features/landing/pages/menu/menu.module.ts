import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuPageComponent } from "./menu.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";

const routes: Routes = [
  {
    path: "",
    component: MenuPageComponent,
  },
];

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  RouterModule.forChild(routes),
  TitleHeaderModule,
];

const COMMON_DECLARATIONS = [MenuPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class MenuModule {}
