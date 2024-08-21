import { Component } from '@angular/core';
import { Post } from '../interface/post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrl: './admin-overview.component.css'
})
export class AdminOverviewComponent {

  constructor(private blogService: BlogService) { }

  post: Post = {
    postId: 0,
    title: '',
    content: '',
    category: '',
    publicationDate: '',
    tags: ''
  };

  onSubmit() {
    console.log(this.post);
    this.blogService.insertBlogPost(this.post).subscribe(
      response => {
        console.log('Blog post inserted successfully.', response);
      },
      error => {
        console.error('Error inserting blog post: ', error);
      });
  }
}
