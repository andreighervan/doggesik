import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog/models/blog';
import { BlogService } from '../blog/services/blog.service';
import { Meta, Title } from '@angular/platform-browser';
import { CoreService } from '../core/services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPosts: Blog[];

  constructor(private blogService: BlogService, private meta: Meta, private title: Title, private coreService: CoreService) { }

  ngOnInit() {
    this.loadBlogPosts();
    this.addMetaTags();
    this.coreService.setComponentState(true)
  }

  loadBlogPosts() {

    this.blogService.getPosts()
      .pipe(
      ).subscribe(posts => console.log(posts));
  }

  addMetaTags() {
    this.title.setTitle('Home Page');
    this.meta.addTags([
      { name: 'title', content: 'Home Page' },
      { name: 'description', content: 'This is Home Page Descrition' },
      { name: 'twitter: card', content: 'Home Page' },
      { name: 'og: url', content: '/home' },
      { name: 'og: title', content: 'Home Page' },
      { name: 'og: description', content: 'This is Home Page Descrition' },
      { name: 'og: image', content: '/assets/images /home-meta.jpg' }
    ]);
  }



}
