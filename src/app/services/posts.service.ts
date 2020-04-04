import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// @ts-ignore
import { Post } from '../models/Post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  /* Defining JSONPlaceholder API URLs */
   baseUrl = 'https://jsonplaceholder.typicode.com';
   postsUrl = '/posts';

  loadPosts(): Observable<Post[]>{
    /* Loading posts from the JSONPlaceholder API */
   return this.http.get<Post[]>(
      this.baseUrl + this.postsUrl
    );
  }
}
