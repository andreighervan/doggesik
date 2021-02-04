import { Component, OnInit } from '@angular/core';
import { Blog } from './models/blog';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: Blog[];
  
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {

    this.blogService.loadAllPosts()
      .pipe(
      ).subscribe(posts => this.blogPosts=posts);
  }


}
