import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Comment } from "../models/Commet";

import { Observable } from "rxjs";

@Injectable()
export class CommentService{

  commentsCollection: AngularFirestoreCollection<Comment>;

  comments: Observable<Comment[]>;

  constructor(public afs: AngularFirestore){
    this.comments = this.afs.collection('comments').valueChanges();
  }


  getComments(){
    console.log(this.comments);
    return this.comments;
  }

}
