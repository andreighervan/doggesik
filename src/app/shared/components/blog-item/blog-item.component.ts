import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../../../blog/models/blog';
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogService } from 'src/app/blog/services/blog.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() posts: Blog[];
  editorRole: boolean = false;

  constructor(private db: AngularFirestore, private blogService: BlogService,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  deletePost(post): void {
    if (confirm(`Delete ${post.title}?`)) {
      this.blogService.delete(post.id)
        .then(() => {
          this.loadBlogPosts();
        })
        .catch(err => console.log(err));
    }
  }


  loadBlogPosts() {
    this.blogService.getPosts()
      .pipe(
      ).subscribe(posts => this.posts = posts);
  }

  editPost(post: Blog) {
    this.router.navigate(['/blog/edit', post.name]);
  }

  goToSinglePost(post) {
    window.scrollTo({ top: 0 });
    this.router.navigate(['/blog', post.name]);
  }

  truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

}
