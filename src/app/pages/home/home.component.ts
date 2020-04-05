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
  pagesIndex: boolean[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    /* Loading posts from the posts service */
    this.postsService.loadPosts().subscribe(
      posts => {
        /* Loading posts in the UI */
        this.posts = posts;
        /* Creating Pages */
        this.pages = this.createPages(posts, 10);
        this.createPaginationIndex(1);
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

    /* Creating Index of pages to show and hide with pagination */
    createPaginationIndex(selectedPage){
      this.pagesIndex = [];
      for (let i = 0; i <= this.pages.length; i++) {
        if (i === selectedPage){
          this.pagesIndex.push(true);
        } else {
          this.pagesIndex.push(false);
        }
      }
    }

}

