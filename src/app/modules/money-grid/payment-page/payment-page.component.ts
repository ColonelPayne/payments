import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PaymentServerService} from '../../../core/services/paymentServer.service';
import {IUser} from '../../../core/models/IUser';
import {Payment} from '../../../core/models/Payment';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  pageId: string;
  payment: Payment;
  payments: Payment[];

  constructor(private activatedRoute: ActivatedRoute,
              private paymentService: PaymentServerService ) {
    activatedRoute.params.subscribe(params => {
      this.pageId = params['id'];
    });
  }

  ngOnInit() {
    this.paymentService.getPaymentById(this.pageId)
      .subscribe(data => {
        this.payment = data.payload.data() as Payment;
      });
  }

}
