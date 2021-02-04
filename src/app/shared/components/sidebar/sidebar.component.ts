import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { map, take } from 'rxjs/operators';
=======
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
import { Blog } from 'src/app/blog/models/blog';
import { BlogService } from 'src/app/blog/services/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  blogPosts: Blog[];

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {
<<<<<<< HEAD
    this.blogService.loadAllPosts()
      .pipe(
        take(3)
=======

    this.blogService.loadAllPosts()
      .pipe(
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
      ).subscribe(posts => this.blogPosts = posts);
  }

  goToSinglePost(post) {
<<<<<<< HEAD
=======
    debugger;
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
    this.router.navigate(['/blog', post.postUrl]);
  }

}
