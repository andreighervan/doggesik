import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.scss']
})
export class EditBlogPostComponent implements OnInit {

  blogForm: FormGroup;
  blog: Blog;
  filePath: any;
  urlImage: string;
  blogPostContent;
  downloadableURL = new BehaviorSubject<string>('');

  constructor(private fb: FormBuilder,
    private blogService: BlogService,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.blog = this.route.snapshot.data["blogPost"];
    this.buildBlogForm();
    this.setFormValues(this.blog);
    this.downloadableURL.next(this.blog.fileUploaded);
    this.downloadableURL.subscribe(url => this.urlImage = url);
  }

  setFormValues(blog) {
    this.blogForm.patchValue({
      title: blog.title,
      blogContent: blog.blogContent
    })
  }

  buildBlogForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      blogContent: ['', Validators.required]
    })
  }

  async uploadFile(event) {

    const file: File = event.target.files[0];

    if (file) {
      this.filePath = `blog/${new Date().getTime()}/${file.name}`;
      const task = this.storage.upload(this.filePath, file);

      (await task).ref.getDownloadURL().then(url => { this.downloadableURL.next(url); });

    } else {
      alert('No images selected');
      this.downloadableURL.next('');
    }

  }

  onSubmit(value, blog) {
    value.fileUploaded = this.urlImage;
    this.blogService.updateBlogPost(blog.id, value).subscribe()
  }


}
