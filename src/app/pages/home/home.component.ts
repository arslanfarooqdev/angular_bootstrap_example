import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
// @ts-ignore
import {Post} from '../../models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* Defining posts array to display in the UI */
  posts: Post[];
  pages: Post[][];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    /* Loading posts from the posts service */
    this.postsService.loadPosts().subscribe(
      posts => {
        /* Loading posts in the UI */
        this.posts = posts;
        /* Creating Pages */
        this.pages = this.createPages(posts, 10);
        console.log(this.pages);
      }
    );
    }

    /* Break the loaded posts array into smaller pages */
    createPages(loadedPosts: Post[], size: number): Post[][]{


      const arrayOfPages = [];
      for (let i = 0; i < loadedPosts.length; i += size) {
        arrayOfPages.push(loadedPosts.slice(i, i + size));
      }
      return arrayOfPages;
    }

}

