import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LayoutPage } from "./layout.page";
import { LoginFormModule } from "../components/login-form/login-form.module";
import { Routes, Router, RouterModule } from "@angular/router";

const ROUTES: Routes = [
  {
    path: "",
    component: LayoutPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginFormModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [LayoutPage],
})
export class LayoutPageModule {}
