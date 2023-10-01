import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { StoreModule } from '@ngrx/store';
import { POST_STATE_NAME } from './state/posts.selector';
import { PostReducer } from './state/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffect } from './state/posts.effects';


@NgModule({
  declarations: [
    PostListComponent,
    AddpostComponent,
    EditpostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(POST_STATE_NAME, PostReducer),
    EffectsModule.forFeature([PostEffect])
  ]
})
export class PostsModule { }
