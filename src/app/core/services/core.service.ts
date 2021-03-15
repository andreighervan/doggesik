import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscribers } from 'src/app/blog/models/blog';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  mailChimpEndpoint = 'https://doggesik.us2.list-manage.com/subscribe/post-json?u=a5d017a0c21c1dd0fb91f1509&id=399e5893aa';
  private showComponent = new BehaviorSubject<boolean>(true);
  showComponent$ = this.showComponent.asObservable();
  times = 0;

  constructor(private db: AngularFirestore, private http: HttpClient) { }

  saveSubscriber(value) {
    return this.db.collection('newsletter').add({
      name: value.name,
      email: value.email
    });
  }

  getSubscribers(): Observable<Subscribers[]> {
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

  subscribeToList(data): any {
    const params = new HttpParams()
      .set('FNAME', data.name)
      .set('EMAIL', data.email)
      .set('b_a5d017a0c21c1dd0fb91f1509_399e5893aa', '')
      .set('callback', `__ng_jsonp__.__req${this.times}.finished`);
    this.times = this.times + 1;
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c')
  }
}
