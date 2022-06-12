import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Comment } from "../models/Commet";

import { Observable } from "rxjs";

@Injectable()
export class CommentService{

  commentsCollection: AngularFirestoreCollection<Comment>;

  comments: Observable<Comment[]>;

  constructor(public afs: AngularFirestore){

    this.commentsCollection = this.afs.collection('comments');
    this.comments = this.commentsCollection.valueChanges();
  }

  addComment(comment: Comment){
    this.commentsCollection.add(comment);
  }


  getComments(){
    return this.comments;
  }

}
