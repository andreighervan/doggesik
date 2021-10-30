import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './models/blog';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts$: Observable<any[]>;
  
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.posts$ = this.blogService.getPosts()
  }

}
