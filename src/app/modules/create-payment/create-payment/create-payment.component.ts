import { Component, OnInit } from '@angular/core';
import {Payment} from '../../../core/models/Payment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EPaymentStatus} from '../../../core/enums';
import {PaymentServerService} from '../../../core/services/paymentServer.service';
import {Router} from '@angular/router';
import {UserServerService} from '../../../core/services/userServer.service';
import * as moment from 'moment-mini';

export function enumSelector(definition) {
  return Object.keys(definition)
    .map(key => ({ value: definition[key], title: key }));
}

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})

export class CreatePaymentComponent implements OnInit {

  public users: any;
  public money: number;
  public payment: Payment;
  public paymentForm: FormGroup;
  public statuses = enumSelector(EPaymentStatus);
  public userID: string;

  constructor(private service: PaymentServerService,
              private userService: UserServerService,
              private router: Router) {
    this.userID = this.userService.UserId;
  }

  private initForm() {
    const payment: { [key: string]: FormControl } = {
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      comment: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      date: new FormControl(moment().format('DD.MM.YYYY : hh:mm')),
      status: new FormControl('', [Validators.required]),
      summ: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    };

    const billing: { [key: string]: FormControl } = {
      bank: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      bik: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)]),
      rs: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(20), Validators.maxLength(20)])
    };

    const formGroup: { [key: string]: FormControl } = Object.assign({}, payment, billing);
    this.paymentForm = new FormGroup(formGroup);
  }

  ngOnInit() {
    this.initForm();
    this.userService.getUser(this.userID)
      .subscribe(data => {
        this.users = data.map(e => {
          return {
            money: e.payload.doc.data().money
          };
        });
        this.money = this.users[0].money;
      });
  }

  public createPayment() {
    console.log(this.paymentForm.value);
    if (this.money >= this.paymentForm.value.summ) {
      this.service.createPayment(this.paymentForm.value).then(data => {
          const summ = this.money - this.paymentForm.value.summ;
          this.userService.UpdateMoney(summ, this.userID);
          this.router.navigate(['/payments']);
        }
      );
    } else {
      alert("Недостаточно средств на счету");
    }

  }
}
