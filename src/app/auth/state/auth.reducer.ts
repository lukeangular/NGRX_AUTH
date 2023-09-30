import { autoLogin, autoLogout, loginStart, loginSuccess, signUpSuccess } from "./auth.actions";
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
    on(signUpSuccess, (state, action)=>{
        return{
            ...state,
            user:action.user
        }
    })
    
)

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}