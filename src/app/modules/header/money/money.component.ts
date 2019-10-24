import { Component, OnInit } from '@angular/core';
import {UserServerService} from '../../../core/services/userServer.service';
import {Payment} from '../../../core/models/Payment';
import {IUser} from '../../../core/models/IUser';

class User implements IUser {
  uid = "0";
  user = "0";
  money = 0;
  constructor() {}
}

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  public users: IUser[];
  public user: IUser;
  constructor(private service: UserServerService) {
    this.user = new User();
  }

  ngOnInit() {
    const userId = this.service.UserId;
    this.service.getUser(userId)
      .subscribe(data => {
        this.users = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as IUser;
        });
        this.user = this.users[0];
      });

  }

}
