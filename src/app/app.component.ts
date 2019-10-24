import { Component } from '@angular/core';
import {UserServerService} from './core/services/userServer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-money';
  isLoggedIn: boolean;
  constructor(public authService: UserServerService)
  {
    this.isLoggedIn = authService.isLoggedIn;
  }
}
