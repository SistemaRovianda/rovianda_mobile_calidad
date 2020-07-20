import { Routes, RouterModule } from "@angular/router";
import { CreateUserComponent } from "./pages/create-user/create-user.component";
import { NgModule } from "@angular/core";
import { CreateUserModule } from "./pages/create-user/create-user.module";

const routes: Routes = [
  {
    path: ":id/create-user",
    component: CreateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CreateUserModule],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
