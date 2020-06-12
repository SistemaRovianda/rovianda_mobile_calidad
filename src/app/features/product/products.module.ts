import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductsRoutingModule } from "./products.routing";

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
