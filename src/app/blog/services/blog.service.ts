import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }

  createBlogPost(value, file) {
    return this.db.collection('blog').add({
      title: value.title,
      blogContent: value.blogContent,
      fileUploaded: file,
      uploadedDate: Date.now()
    });
  }

  loadAllPosts() {
    return this.db.collection('blog')
      .snapshotChanges()
      .pipe(
        map(snaps => this.convertSnaps<Blog>(snaps)),
        first());
  }

  loadBlogByUrl(postUrl) {
    return this.db.collection('blog',
      ref => ref.where("postUrl", "==", postUrl))
      .snapshotChanges()
      .pipe(
        map(snaps => {

          const blogs = this.convertSnaps<Blog>(snaps);

          return blogs.length == 1 ? blogs[0] : undefined;
        }),
        first()
      )
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
