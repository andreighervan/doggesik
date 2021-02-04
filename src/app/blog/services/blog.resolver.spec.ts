import { TestBed } from '@angular/core/testing';

import { BlogResolver } from './blog.resolver';

describe('Blog.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogResolver = TestBed.get(BlogResolver);
    expect(service).toBeTruthy();
  });
});
