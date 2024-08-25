import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PostsComponent } from './posts/posts.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AdminOverviewComponent,
    BlogPostDetailsComponent,
    BlogNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
