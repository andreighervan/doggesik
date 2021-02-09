import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { first, map, shareReplay, take } from 'rxjs/operators';
import { Blog } from '../models/blog';

import firebase from 'firebase/app'
import { CommentComponent } from '../components/comment/comment.component';
import { Comment } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private db: AngularFirestore, private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  createBlogPost(value, file) {
    return this.db.collection('blog').add({
      title: value.title,
      blogContent: value.blogContent,
      fileUploaded: file,
      uploadedDate: Date.now()
    });
  }

  loadAllPosts(pageSize = 10) {
    return this.db.collection('blog', ref => ref
      .limit(pageSize))
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

  // comments

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  addComments(data: any, ref?: any): Promise<firebase.firestore.DocumentReference> {
    const timestamp = this.timestamp;
    const copyTrans = Object.assign({}, data);
    const data$ = JSON.parse(JSON.stringify(copyTrans));

    return this.db.collection(ref).add({
      ...data$,
      updatedAt: timestamp,
      createdAt: timestamp,
    });
  }

  deleteComment<T>(ref: any): Promise<void> {
    return this.db.doc(ref).delete();
  }

  updateComment<T>(ref: any, data: any): Promise<void> {
    return this.db.doc(ref).update({
      ...data,
      updatedAt: this.timestamp,
    });
  }

  addDynamicComponent(viewContainerRef: ViewContainerRef, comment: Comment) {

    if (!viewContainerRef)
      return;
    viewContainerRef.clear();

    const factory = this.factoryResolver.resolveComponentFactory(CommentComponent);
    const component: ComponentRef<CommentComponent> = factory.create(viewContainerRef.parentInjector);
    const currComponent = component.instance;

    currComponent.comment = comment;
    viewContainerRef.insert(component.hostView);
  }

  colWithIds$<T>(ref?: any, queryFn?): Observable<any[]> {
    return this.db.collection<T>(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<T>[]) => {
          return actions.map((a: DocumentChangeAction<T>) => {
            const data: Object = a.payload.doc.data() as T;
            const docId = a.payload.doc.id;
            const docPath = a.payload.doc.ref.path;
            data['docPath'] = docPath;
            return { docId, docPath, ...data };
          });
        }),
        shareReplay(1)
      );
  }


}
