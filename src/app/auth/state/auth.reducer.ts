import { autoLogin, autoLogout, loginStart, loginSuccess } from "./auth.actions";
import { initialAuthState } from "./auth.state";
import { createReducer, on } from "@ngrx/store"


const _authReducer = createReducer(
    initialAuthState,
    on(loginSuccess, (state, action)=>{
        return{
            ...state,
            user: action.user
        }
    }),
    on(autoLogout, (state, action)=>{
        return{
            ...state,
            user:null
        }
    }),
    
)

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}