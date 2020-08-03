import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductInspectionComponent } from "./pages/product-inspection/product-inspection.component";
import { ProductInspectionModule } from "./pages/product-inspection/product-inspection.module";
import { DryingLabelFormComponent } from "./components/drying-label-form/drying-label-form.component";
import { DryingLabelComponent } from "./pages/drying-label/drying-label.component";
import { DryingLabelModule } from "./pages/drying-label/drying-label.module";
import { ProductsRoviandaResolver } from "src/app/shared/resolvers/products-rovianda.resolver";

const routes: Routes = [
  {
    path: "inspection",
    component: ProductInspectionComponent,
  },
  {
    path: "drying-label",
    resolve: {
      productsRovianda: ProductsRoviandaResolver,
    },
    component: DryingLabelComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductInspectionModule,
    DryingLabelModule,
  ],
  exports: [RouterModule],
  providers: [ProductsRoviandaResolver],
})
export class ProductsRoutingModule {}
