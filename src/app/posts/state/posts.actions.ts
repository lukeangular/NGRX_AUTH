import { createAction, props } from "@ngrx/store";
import { PostModel } from "../models/posts.model";

const GET_POST_LIST = '[posts page] get post list';
const GET_POST_LIST_SUCCESS = '[posts page] get post list success';
const ADD_POST = '[posts page] add post';
const ADD_POST_SUCCESS = '[posts page] add post success';
const EDIT_POST = '[posts page] edit post';
const EDIT_POST_SUCCESS = '[posts page] edit post success';
const DELETE_POST = '[posts page] delete post';
const DELETE_POST_SUCCESS = '[posts page] delete post success';

// get posts
export const getPostList = createAction(
    GET_POST_LIST
)
export const getPostListSuccess = createAction(
    GET_POST_LIST_SUCCESS,
    props<{ posts: PostModel[] }>()
)
// add posts
export const addPost = createAction(
    ADD_POST,
    props<{post: PostModel}>()
)
export const addPostSuccess = createAction(
    ADD_POST_SUCCESS,
    props<{post: PostModel}>()
)
// update post
export const updatePost = createAction(
    EDIT_POST,
    props<{id:string}>()
)
export const updatePostSuccess = createAction(
    EDIT_POST_SUCCESS,
    props<{post: PostModel}>()
)
// delete post
export const deletePost = createAction(
    DELETE_POST,
    props<{id:string}>()
)
export const deletePostSuccess = createAction(
    DELETE_POST_SUCCESS,
    props<{id:string}>()
)