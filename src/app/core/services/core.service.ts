import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscribers } from 'src/app/blog/models/blog';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private showComponent = new BehaviorSubject<boolean>(true);
  showComponent$ = this.showComponent.asObservable();

  constructor(private db: AngularFirestore, private http: HttpClient) { }

  saveSubscriber(value) {
    return this.db.collection('newsletter').add({
      name: value.name,
      email: value.email
    });
  }

  getSubscribers(): Observable<Subscribers[]> {
    debugger;
    return this.db.collection('newsletter')
      .snapshotChanges()
      .pipe(
        map(snaps => this.convertSnaps(snaps)));
  }

  convertSnaps<T>(snaps) {
    return <T[]>snaps.map(snap => {
      return {
        id: snap.payload.doc.id,
        ...snap.payload.doc.data()
      };

    });
  }

  setComponentState(show: boolean) {
    this.showComponent.next(show);
  }

  getComponentState() {
    return this.showComponent$;
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }
}
