import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrl: './blog-post-details.component.css'
})
export class BlogPostDetailsComponent implements OnInit {
  post: Post = {
    postId : 0,
    title : '',
    content : '',
    category : '',
    publicationDate : '',
    tags : ''
  };

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id')?.toString();
    console.log(postId);

      this.blogService.getBlogPost(postId).subscribe(
        post => {
          this.post = post;
        },
        error => {
          console.error('Could not retrieve blog post: ', error);
        }
      );
  }



}
