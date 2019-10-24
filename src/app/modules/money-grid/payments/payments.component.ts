import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PaymentServerService } from '../../../core/services/paymentServer.service';
import { Payment } from '../../../core/models/Payment';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'comment', 'date', 'status', 'summ', 'bank', 'bik', 'rs'];
  public payments: Payment[];
  public dataSource: any;

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private service: PaymentServerService) { }

  ngOnInit() {
    this.service.getPayments().subscribe(data => {
      this.payments = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Payment;
      });
      this.dataSource = new MatTableDataSource(this.payments);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
