import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Posts } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public firestore: AngularFirestore) { }

  addSlot(args: Posts){
    const post: Posts = JSON.parse(JSON.stringify(args)) as Posts;
    post.id = this.firestore.createId();
    post.availabiltyDate = new Date(post.availabiltyDate);
    this.firestore.collection('slots-details').add(post)
  }
}
