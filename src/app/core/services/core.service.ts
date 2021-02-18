import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private showComponent = new BehaviorSubject<boolean>(true);
  showComponent$ = this.showComponent.asObservable();

  constructor(private db: AngularFirestore) { }

  saveSubscriber(value) {
    return this.db.collection('newsletter').add({
      name: value.name,
      email: value.email
    });
  }

  setComponentState(show: boolean) {
    this.showComponent.next(show);
  }

  getComponentState() {
    return this.showComponent$;
  }
}
