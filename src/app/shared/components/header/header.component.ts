import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
<<<<<<< HEAD
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
=======
import firebase from "firebase";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  editorUser: boolean = false;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {

    this.isLoggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
<<<<<<< HEAD
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn => !loggedIn)))
=======
    this.isLoggedOut$=this.isLoggedIn$.pipe(map((loggedIn=>!loggedIn)))
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
  }

  signOut() {
    this.afAuth.signOut();
  }

}
