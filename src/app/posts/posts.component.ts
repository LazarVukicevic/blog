import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../interface/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
      this.blogService.getBlogPosts().subscribe(
        posts => {
          this.posts = posts;
          // console.log(this.posts);
        },
        error => {
          console.error('Error fetching posts: ', error);
        }
      );
  }




}
