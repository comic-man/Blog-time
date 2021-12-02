import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../Data-Storage/data-storage.service';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  loadedPosts = [];

  constructor(private dataStorageService: DataStorageService) {}
  onSaveData(
    this.dataStorageService.storePosts();
  ){

  }

  ngOnInit(): void {
  }
  onCreatePost(postData: { title: string; content:string}){
    console.log(postData);
  }

}
