import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {moneyRoutes} from './modules/money-grid/money-grid.routing.module';
import {createPaymentRoutes} from './modules/create-payment/create-payment.routing.module';
import {userRoutes} from './modules/user/user.routing.module';


const routes: Routes = [
  {
    path: "",
    redirectTo: "payments",
    pathMatch: "full"
  },
    ...moneyRoutes,
    ...createPaymentRoutes,
    ...userRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
