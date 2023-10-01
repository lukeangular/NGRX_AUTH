import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSate } from 'src/app/appstate/app.state';
import { PostModel } from '../../models/posts.model';
import { getPostList } from '../../state/posts.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList$: Observable<PostModel>

  constructor(
    private _store: Store<AppSate>
  ) { }

  ngOnInit(): void {
  }
}
