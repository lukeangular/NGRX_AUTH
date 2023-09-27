import { setErrorMessage, setSpinner } from "./shared.actions"
import { initialSharedSatae } from "./shared.state"
import { createReducer, on } from "@ngrx/store"

const _sharedReducer = createReducer(
    initialSharedSatae,
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    }),
    on(setSpinner, (state, action)=>{
        return{
            ...state,
            showLoading: action.status
        }
    })
)

export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}