import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PaymentServerService} from '../../../core/services/paymentServer.service';
import {Payment} from '../../../core/models/Payment';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  payment: Payment = new Payment();

  constructor(private activatedRoute: ActivatedRoute,
              private paymentService: PaymentServerService ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(
    ).subscribe(params => {
      const pageId = params.id;
      this.paymentService.getPaymentById(pageId)
        .subscribe(data => {
          Object.assign(this.payment, data.payload.data());
        });
    });
  }

}
