import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { IsAuthGuard } from "./shared/guards/is-auth.guard";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "login",
    canActivate: [IsAuthGuard],
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [AuthGuard, IsAuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
