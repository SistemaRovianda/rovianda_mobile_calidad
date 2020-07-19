import { LoginEffects } from "src/app/features/landing/store/login/login.effects";
import { UsersEffects } from "src/app/features/users/store/users/users.effects";
import { CatalogLotsEffects } from "src/app/features/product/store/catalog-lots/catalog-lots.effects";
import { CatalogProductsEffects } from "src/app/features/product/store/catalog-products/catalog-products.effects";
import { ProductInspectionEffects } from "src/app/features/product/store/product-inspection/product-inspection.effects";
import { DryingLabelEffects } from "src/app/features/product/store/drying-label/drying-label.effects";

export const effects = [
  LoginEffects,
  UsersEffects,
  CatalogProductsEffects,
  CatalogLotsEffects,
  ProductInspectionEffects,
  DryingLabelEffects,
];
