import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [BlogComponent, AddBlogPostComponent, EditBlogPostComponent, BlogSingleComponent, BlogContentComponent, CommentComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule
  ],

  entryComponents: [
    CommentComponent
  ]
})
export class BlogModule { }
