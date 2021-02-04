import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private db: AngularFirestore) { }

  saveSubscriber(value) {
    return this.db.collection('newsletter').add({
      name: value.name,
      email: value.email
    });
  }
}
