import { createAction, props } from "@ngrx/store"
import { User } from "src/app/models/user.model"

const AUTH_LOGIN_START = '[auth state] login start'
const LOGIN_SUCCESS = '[auth state] login success'
const LOGIN_FAIL = '[auth state] login fail'


export const loginStart = createAction(
    AUTH_LOGIN_START,
    props<{ email: string, password: string }>()
)
export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{ user: User }>()
)
export const loginFail = createAction(
    LOGIN_FAIL,
)