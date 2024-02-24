import { NgModule } from "@angular/core";
import { DisplayStore } from "../display-store/display-store.component";
import { RouterModule } from "@angular/router";

const Routes = [
  {
    path: "",
    component: DisplayStore
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(Routes)
  ],
  declarations: [
    DisplayStore
  ]
})
export class MainModule {}
