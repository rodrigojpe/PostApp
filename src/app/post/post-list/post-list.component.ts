import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  implements OnInit {

  posts: Post[] = []

  constructor(private store: Store<AppState>){}
  
  ngOnInit(): void {

    this.store.select('posts').subscribe(
      // posts => this.posts = posts
    )
  }


}
