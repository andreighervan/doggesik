import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD

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

@NgModule({
  declarations: [BlogComponent, AddBlogPostComponent, EditBlogPostComponent, BlogSingleComponent, BlogContentComponent],
=======
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';

@NgModule({
  declarations: [BlogComponent, AddBlogPostComponent, EditBlogPostComponent, BlogSingleComponent],
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
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
<<<<<<< HEAD
    MatButtonModule
=======
    MatButtonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
  ]
})
export class BlogModule { }
