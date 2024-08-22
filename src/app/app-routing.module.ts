import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';

const routes: Routes = [
  { path: '', component: PostsComponent, title: 'Blog Posts' },
  { path: 'admin', component: AdminOverviewComponent, title: 'Admin Dashboard' },
  { path: ':id', component: BlogPostDetailsComponent, title: 'Post' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
