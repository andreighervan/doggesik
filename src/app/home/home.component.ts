import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog/models/blog';
import { BlogService } from '../blog/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPosts: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {

    this.blogService.loadAllPosts()
      .pipe(
      ).subscribe(posts => this.blogPosts = posts);
  }

}
