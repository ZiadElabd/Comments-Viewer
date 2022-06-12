import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  text: string;

  constructor(private service: CommentService) {}

  ngOnInit() {}


  addComment(){
    console.log('comment added');
    //console.log(this.text);
    this.service.addComment({
      content: this.text,
      time: '' + Date.now()
    });
  }

}
