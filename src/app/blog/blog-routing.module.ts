import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';
import { BlogResolver } from './services/blog.resolver';

const routes: Routes = [
  { path: '', component: BlogComponent },
  {
    path: 'add-new-post', component: AddBlogPostComponent
  },
  {
    path: ':blogUrl', component: BlogSingleComponent,
    resolve: {
      blogPost: BlogResolver
    }
  },
  {
    path: 'edit/:blogUrl', component: EditBlogPostComponent,
    resolve: {
      blogPost: BlogResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
