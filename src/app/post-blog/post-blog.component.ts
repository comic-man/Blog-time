import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  loadedPosts = [];
  constructor() { }

  ngOnInit(): void {
  }
  onCreatePost(postData: { title: string; content:string}){
    console.log(postData);
  }

}
