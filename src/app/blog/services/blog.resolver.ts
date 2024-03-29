import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Blog } from '../models/blog';
import { BlogService } from './blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver {

  constructor(private blogService: BlogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> {

    const blogUrl = route.paramMap.get("blogUrl");
    return this.blogService.loadBlogByUrl(blogUrl);
  }
}
