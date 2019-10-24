import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MoneyGridModule } from './modules/money-grid/money-grid.module';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './modules/header/menu/menu.component';
import { MoneyComponent } from './modules/header/money/money.component';
import { CreatePaymentModule } from './modules/create-payment/create-payment.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserModule} from './modules/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MoneyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    MoneyGridModule,
    CreatePaymentModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    UserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MomentModule
  ],
  providers: [AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
