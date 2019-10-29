import { EPaymentStatus } from '../enums';
import { AbstractOriginal } from './AbstractOriginal';
import { AbstractDTO } from './AbstractDTO';

export class Payment extends AbstractOriginal<PaymentDTO> {
  public id: string;
  public name: string;
  public comment: string;
  public date: Date;
  public status: EPaymentStatus;
  public summ: number;

  public bank: string;
  public bik: number;
  public rs: number;

  constructor() {
    super();
  }

  public toDto(): PaymentDTO {
    const res = new PaymentDTO();

    res.id = this.id;
    res.name = this.name;
    res.comment = this.comment;
    res.date = this.date;
    res.status = this.status;
    res.summ = this.summ;

    res.bank = this.bank;
    res.bik = this.bik;
    res.rs = this.rs;

    return res;
  }
}

export class PaymentDTO extends AbstractDTO<Payment> {
  public id: string;
  public name: string;
  public comment: string;
  public date: Date;
  public status: EPaymentStatus;
  public summ: number;

  public bank: string;
  public bik: number;
  public rs: number;

  toOriginal(): Payment {
    const res = new Payment();

    res.id = this.id;
    res.name = this.name;
    res.comment = this.comment;
    res.date = this.date;
    res.status = this.status;
    res.summ = this.summ;

    res.bank = this.bank;
    res.bik = this.bik;
    res.rs = this.rs;

    return res;
  }
}
