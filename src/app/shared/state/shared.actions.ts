export const ERROR_ACTION = '[shared state] set error message';
export const SPINNER_ACTION = '[shared state] set spinner';
import { createAction, props } from "@ngrx/store";


export const setErrorMessage = createAction(
    ERROR_ACTION,
    props<{message: string}>()
)
export const setSpinner = createAction(
    SPINNER_ACTION,
    props<{status: boolean}>()
)