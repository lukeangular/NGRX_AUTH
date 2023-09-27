import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, tap, of } from "rxjs";
import { Router } from "@angular/router";
import { setErrorMessage } from "src/app/shared/state/shared.actions";
import { AppSate } from "src/app/appstate/app.state";
import { Store } from "@ngrx/store";

@Injectable()
export class AuthEffect {
    constructor(
        private _action$: Actions,
        private _authService: AuthService,
        private _router:Router,
        private _store: Store<AppSate>
    ) { }

    login$ = createEffect(() => {
        return this._action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this._authService.login(action.email, action.password).
                    pipe(map((data) => {
                        // if no error then set error message null
                        this._store.dispatch(setErrorMessage({message:''}))
                        const user = this._authService.formatUser(data)
                        return loginSuccess({ user })
                    }),
                    catchError((errorResp)=>{
                        const errorMesssage = this._authService.getErrorMessage(
                            errorResp.error.error.message)
                        return of(setErrorMessage({message: errorMesssage}))
                    })
                )
            })
        )
    })

    // redirect to home page after login success
    loginRedirect$ = createEffect(()=>{
        return this._action$.pipe(
            ofType(loginSuccess),
            tap((acttion)=>{
                this._router.navigate(['/'])
            })
        )
    }, {dispatch:false})
}