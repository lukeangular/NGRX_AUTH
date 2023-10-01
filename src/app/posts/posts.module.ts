import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';


@NgModule({
  declarations: [
    PostListComponent,
    AddpostComponent,
    EditpostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
