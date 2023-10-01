import { PostModel } from "../models/posts.model";

export interface PostState {
    posts: PostModel[]
}

export const initialPostState: PostState = {
    posts: []
}