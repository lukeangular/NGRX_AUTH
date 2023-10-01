import { createReducer } from "@ngrx/store"
import { initialPostState } from "./posts.state"

const _postReducer = createReducer(
    initialPostState
)

export function PostReducer(state:any, action:any){
    return _postReducer(state, action)
}