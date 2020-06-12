import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductInspectionComponent } from "./pages/product-inspection/product-inspection.component";
import { ProductInspectionModule } from "./pages/product-inspection/product-inspection.module";

const routes: Routes = [
  {
    path: "inspection",
    component: ProductInspectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ProductInspectionModule],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
