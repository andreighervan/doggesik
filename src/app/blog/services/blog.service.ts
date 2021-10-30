import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { filter, find, first, map, tap, } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private db: AngularFirestore, private http: HttpClient) {
  }

  createBlogPost(value, file) {
    return this.db.collection('blog').add({
      title: value.title,
      blogContent: value.blogContent,
      fileUploaded: file,
      uploadedDate: Date.now(),
      shortDescription: value.shortDescription,
      postUrl: value.postUrl,
      smallImage: value.smallImage
    });
  }

  getPosts(): Observable<any[]> {
    const url = `${environment.apiUrl}posts`
    return this.http.get<any[]>(url);
  }

  loadBlogByUrl(postUrl) {
    const url = `${environment.apiUrl}posts`
    return this.http.get<Blog>(url)
  }

  delete(id: string): Promise<void> {
    return this.db.collection('blog').doc(id).delete();
  }

  updateBlogPost(id: string, changes: Blog): Observable<any> {

    return from(this.db.collection('blog').doc(id).update(changes));

  }

  convertSnaps<T>(snaps) {
    return <T[]>snaps.map(snap => {
      return {
        id: snap.payload.doc.id,
        ...snap.payload.doc.data()
      };

    });
  }


}
