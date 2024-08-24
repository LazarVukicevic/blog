import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrl: './admin-overview.component.css'
})
export class AdminOverviewComponent implements OnInit {
  selectDeletePost = 1;
  posts: Post[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogPosts().subscribe(
      post => {
        this.posts = post;
      },
      error => {
        console.error('Error: ', error);
      }
    );
  }

  post: Post = {
    postId: 0,
    title: '',
    content: '',
    category: '',
    publicationDate: '',
    tags: ''
  };

  onSelected(id: number): void {
		this.selectDeletePost = id;
	}

  onSubmit() {
    console.log(this.post);
    this.blogService.insertBlogPost(this.post).subscribe(
      response => {
        console.log('Blog post inserted successfully.', response);
      },
      error => {
        console.error('Error inserting blog post: ', error);
      });
    location.reload();
  }

  myFunc() {
    if(confirm(`Are you sure you want to delete POST: ${this.selectDeletePost}?`)) {
      this.blogService.deleteBlogPost(this.selectDeletePost).subscribe(
        () => {
          console.log('post successfully deleted!');   
        },
        error => {
          console.error('Error deleting post: ', error);
        }
      );
    }
  }

}
