import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppSate } from "../appstate/app.state";
import { PostModel } from "../posts/models/posts.model";
import { Observable, map } from "rxjs";

@Injectable()
export class PostsService {

    baseAPI = 'https://posts-b8fd6-default-rtdb.firebaseio.com/'

    constructor(
        private _http: HttpClient,
        private _store: Store<AppSate>
    ) { }


    // get post list
    getPostList(): Observable<PostModel[]> {
        let url = `${this.baseAPI}posts.json`;
        return this._http.get<PostModel[]>(url)
            .pipe((
                map((data) => {
                    const posts: PostModel[] = [];
                    for (let key in data) {
                        posts.push({ ...data[key], id: key })
                    }
                    return posts
                })
            ))
    }


    // add post
    addPost(post: PostModel): Observable<{ name: string }> {
        let url = `${this.baseAPI}posts.json`
        return this._http.post<{ name: string }>(url, post);
    }


    // update post
    updatePost(post: PostModel) {
        const postData = {
            [String(post.id)]: { title: post.title, description: post.description },
        };
        let url = `${this.baseAPI}posts.json`
        return this._http.patch(url, postData);
    }

    // delete post
    deletepost(id: string) {
        let url = `${this.baseAPI}posts/${id}.json`
        return this._http.delete(url);
    }

}