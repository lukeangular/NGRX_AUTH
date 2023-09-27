import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { SharedReducer } from "../shared/state/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/state/shared.selector";
import { SharedState } from "../shared/state/shared.state";

export interface AppSate{
    [AUTH_STATE_NAME]: AuthState,
    [SHARED_STATE_NAME]: SharedState
}

export const appReducer ={
    [AUTH_STATE_NAME]: AuthReducer,
    [SHARED_STATE_NAME]: SharedReducer
}