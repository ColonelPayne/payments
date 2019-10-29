import { Component } from '@angular/core';
import {UserServerService} from './core/services/userServer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-money';
  isLoggedIn: boolean;
  constructor(public authService: UserServerService,
              private router: Router)
  {
    router.events.subscribe((val) => {
      this.isLoggedIn = authService.isLoggedIn;
    });
  }
}
