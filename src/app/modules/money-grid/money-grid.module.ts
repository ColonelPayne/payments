import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaymentServerService } from '../../core/services/paymentServer.service';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatSortModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PaymentsComponent, PaymentPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatListModule
  ],
  providers: [
    PaymentServerService
  ]
})
export class MoneyGridModule { }
