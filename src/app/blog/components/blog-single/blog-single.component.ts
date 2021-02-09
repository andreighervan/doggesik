import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ActivationStart, Route } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogSingleComponent implements OnInit {
  blog: Blog;
  color = 'blue-2';
  private sub: Subscription;
  constructor(private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private blogService: BlogService) {
  }

  ngOnInit() {
    this.sub = this.route.data.subscribe(event => {
      this.blog = event['blogPost'];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
