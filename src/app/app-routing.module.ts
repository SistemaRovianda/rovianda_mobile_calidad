import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { IsAuthGuard } from "./shared/guards/is-auth.guard";
import { AuthGuard } from "./shared/guards/auth.guard";
import { UsersResolve } from "./shared/resolvers/users.resolver";

const routes: Routes = [
  {
    path: "login",
    
    loadChildren: () =>
      import("./features/landing/layout/layout.module").then(
        (m) => m.LayoutPageModule
      ),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "menu",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/landing/pages/menu/menu.module").then(
        (m) => m.MenuModule
      ),
  },
  {
    path: "product",
    loadChildren: () =>
      import("./features/product/products.module").then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: "user",
    resolve: {
      users: UsersResolve,
    },
    loadChildren: () =>
      import("./features/users/users.module").then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [AuthGuard, IsAuthGuard, UsersResolve],
  exports: [RouterModule],
})
export class AppRoutingModule {}
