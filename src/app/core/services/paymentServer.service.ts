import { Injectable } from '@angular/core';
import { Payment } from '../models/Payment';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class PaymentServerService {
  constructor(
    private afs: AngularFirestore
  ) {
  }

  public getPayments() {
    return this.afs.collection<Payment>('payments').snapshotChanges();
  }

  public getPaymentById(id: string) {
    return this.afs.collection<Payment>('payments').doc(id).snapshotChanges();
  }

  public createPayment(payment: Payment) {
    return this.afs.collection<Payment>('payments').add(payment);
  }

}
