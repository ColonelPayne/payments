import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {Payment} from '../models/Payment';
import {IUser} from '../models/IUser';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServerService {
  allMoney: number;
  userData: any;

  usersCollectionRef: AngularFirestoreCollection<IUser>;
  user$: Observable<IUser[]>;

  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
    this.usersCollectionRef = this.afs.collection<IUser>('money');
    this.user$ = this.usersCollectionRef.snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as IUser;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }

  get UserId() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.uid;
  }

  public SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public SignOut() {
    return this.afAuth.auth.signOut();
  }

  public getUser(userId: string) {
   return this.afs.collection<IUser>('money', ref => ref.where('uid', '==', userId)).snapshotChanges();
  }

  public UpdateMoney(money: number, UserID: string) {
    this.usersCollectionRef.doc(UserID).update({ money: 4000 });
  }

}
