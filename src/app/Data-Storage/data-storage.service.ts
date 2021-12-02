import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post-blog/post.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient, private postService: PostService) { }

  storePosts(){
    const posts = this.postService.getPosts();
    this.http.put('https://mothman-blog-default-rtdb.firebaseio.com/post.json', posts).subscribe(response => {
      console.log(response);
    });
  }
}
