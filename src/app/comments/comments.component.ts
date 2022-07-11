import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/comment.service';

import { Comment } from '../models/Commet';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor(private service: CommentService) { }

  ngOnInit() {
    this.service.getComments().subscribe(comments => {
      console.log(comments);
      this.comments = comments;
    })
  }

  getTime(timestamp){
    var date = new Date(Number(timestamp));

    let res = "Date: "+date.getDate() +
            "/"+(date.getMonth()+1)+
            "/"+date.getFullYear()+
            " "+date.getHours()+
            ":"+date.getMinutes()+
            ":"+date.getSeconds();
    return res;
  }

}
