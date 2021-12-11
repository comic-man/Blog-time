import { Injectable, OnInit, EventEmitter, Output } from '@angular/core';
import { PostBlogComponent } from './post-blog.component';

@Injectable({
  providedIn: 'root'
})
export class PostBlogComponent implements OnInit {
  @Output() postWasSelected = new EventEmitter<Post>();
   private posts: Post[] = [
    new Post ('Test Post')
  ];

  getPosts(
  ){
    return this.posts.slice();
  }
  constructor() { }

  ngOnInit(){

  }
}
