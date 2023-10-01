import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppSate } from "../appstate/app.state";
import { PostModel } from "../posts/models/posts.model";
import { Observable } from "rxjs";

@Injectable()
export class PostsService {

    baseAPI = 'https://posts-b8fd6-default-rtdb.firebaseio.com/'

    constructor(
        private _http: HttpClient,
        private _store: Store<AppSate>
    ) { }


    // get post list
    getPostList(): Observable<PostModel> {
        let url = `${this.baseAPI}posts.json`
        return this._http.get<PostModel>(url)
    }


    // add post
    addPost() {
        let url = `${this.baseAPI}posts.json`
    }


    // edit post
    editPost() {
        let url = `${this.baseAPI}posts.json`

    }


    // delete post
    deletePost() {

    }
}