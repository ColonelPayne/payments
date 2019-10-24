import { Routes } from "@angular/router";
import { PaymentsComponent } from './payments/payments.component';
import {PaymentPageComponent} from './payment-page/payment-page.component';
import {AuthGuard} from '../user/auth.guard';

export const moneyRoutes: Routes = [
  {path: 'payments', component: PaymentsComponent, canActivate: [AuthGuard]},
  {path: 'payment/:id', component: PaymentPageComponent, canActivate: [AuthGuard]}
];

