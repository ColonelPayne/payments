import { Routes } from "@angular/router";
import {CreatePaymentComponent} from './create-payment/create-payment.component';
import {AuthGuard} from '../user/auth.guard';

export const createPaymentRoutes: Routes = [
  {path: 'create', component: CreatePaymentComponent, canActivate: [AuthGuard]},
];

