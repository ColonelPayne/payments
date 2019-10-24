import { Component, OnInit } from '@angular/core';
import {UserServerService} from '../../../core/services/userServer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserServerService,
              private router: Router) { }

  ngOnInit() {
  }

  public signOut() {
    this.userService.SignOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

}
