import {Component, NgZone, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserServerService} from '../../../core/services/userServer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private service: UserServerService,
              private router: Router,
              private ngZone: NgZone) { }

  private initForm() {
    const login: { [key: string]: FormControl } = {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    };
    this.loginForm = new FormGroup(login);
  }

  ngOnInit() {
    this.initForm();
  }

  public login() {
    this.service.SignIn(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        this.ngZone.run(() => {
          location.href="/payments";
          // this.router.navigate(['/payments']);
        });
      }).catch((error) => {
      window.alert(error.message);
    });
  }

}
