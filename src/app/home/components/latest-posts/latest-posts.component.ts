import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {
  @Input() blogPosts: Blog[];

  constructor() { }

  ngOnInit() {
  }

}
