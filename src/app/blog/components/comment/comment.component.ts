import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { Comment } from '../../models/blog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  public comment: Comment;
  comments$: Observable<Comment[]>;

  COMMENTS_REF: string = "comments";
  COL_NODE: string;

  viewReply: string;
  editComment: string;

  constructor(private blogService: BlogService) {
    this.comment = new Comment();
    this.viewReply = "";
  }

  ngOnInit() {
    this.COL_NODE = `${this.comment.docPath}/${this.COMMENTS_REF}`;
    this.comments$ = this.blogService.colWithIds$(this.COL_NODE, ref => ref.orderBy('date', 'desc'));
  }

  onComment(comment: Comment) {
    this.blogService.addComments(comment, this.COL_NODE)
      .then(_ => {
        this.comment = new Comment();
      })
  }

  onEdit(comment: Comment) {
    this.blogService.updateComment(comment.docPath, comment)
      .then(_ => {
        this.editComment = "";
      })
  }

  onDelete(comment: Comment) {
    this.blogService.deleteComment(comment.docPath);
  }

  onViewReply(comment: Comment) {
    this.blogService.addDynamicComponent(this.viewContainerRef, comment);
  }

}
