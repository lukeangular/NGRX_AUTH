import { createAction, props } from "@ngrx/store"
import { User } from "src/app/models/user.model"

const AUTH_LOGIN_START = '[auth state] login start'
const LOGIN_SUCCESS = '[auth state] login success'
const LOGIN_FAIL = '[auth state] login fail'
const AUTO_LOGIN = '[auth state] auto login'
const AUTo_LOGOUT = '[auth state] auto logout'
// sign up
const SIGN_UP_START = '[auth state] sign up start'
const SIGN_UP_SUCEESS = '[auth state] sign up success'
export const signUpStart = createAction(
    SIGN_UP_START,
    props<{email:string, password: string}>()
)
export const signUpSuccess = createAction(
    SIGN_UP_SUCEESS,
    props<{user:User, redirect:boolean}>()
)

export const loginStart = createAction(
    AUTH_LOGIN_START,
    props<{ email: string, password: string }>()
)
export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{ user: User, redirect: boolean }>()
)
export const loginFail = createAction(
    LOGIN_FAIL,
)
export const autoLogin = createAction(
    AUTO_LOGIN,
)
export const autoLogout = createAction(
    AUTo_LOGOUT
)
//sign up
