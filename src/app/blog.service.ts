import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './interface/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<Post[]> { 
    return this.http.get<Post[]>('http://localhost:5178/api/Blog/posts', {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }


  getBlogPost(id: any): Observable<Post> {
    return this.http.get<Post>(`http://localhost:5178/api/Blog/posts/${id}`);
  }

  insertBlogPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:5178/api/Blog/postss', post);
  }

  updateBlogPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`http://localhost:5178/api/Blog/posts/${post.postId}`, post);
  }

  deleteBlogPost(id: any): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:5178/api/Blog/posts/${id}`)
  }


  

}
