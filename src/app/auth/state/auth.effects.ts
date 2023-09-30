import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { autoLogin, autoLogout, loginStart, loginSuccess, signUpStart, signUpSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, tap, of, mergeMap, EMPTY } from "rxjs";
import { Router } from "@angular/router";
import { setErrorMessage } from "src/app/shared/state/shared.actions";
import { AppSate } from "src/app/appstate/app.state";
import { Store } from "@ngrx/store";
import { User } from "src/app/models/user.model";

@Injectable()
export class AuthEffect {
    constructor(
        private _action$: Actions,
        private _authService: AuthService,
        private _router: Router,
        private _store: Store<AppSate>
    ) { }

    login$ = createEffect(() => {
        return this._action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this._authService.login(action.email, action.password).
                    pipe(map((data) => {
                        // if no error then set error message null
                        this._store.dispatch(setErrorMessage({ message: '' }))
                        const user = this._authService.formatUser(data)
                        this._authService.setUserInLocalStorage(user);
                        return loginSuccess({ user, redirect: true })
                    }),
                        catchError((errorResp) => {
                            const errorMesssage = this._authService.getErrorMessage(
                                errorResp.error.error.message)
                            return of(setErrorMessage({ message: errorMesssage }))
                        })
                    )
            })
        )
    })

    // redirect to home page after login success
    loginRedirect$ = createEffect(() => {
        return this._action$.pipe(
            ofType(...[loginSuccess, signUpSuccess]),
            tap((acttion) => {
                if (acttion.redirect) {
                    this._router.navigate(['/'])
                }
            })
        )
    }, { dispatch: false })


    // auto login
    autoLogin$ = createEffect(() => {
        return this._action$.pipe(
            ofType(autoLogin),
            mergeMap((action) => {
                const user = this._authService.getUserFromLocalStorage();
                if (user !== null) {
                    return of(loginSuccess({ user, redirect: false }))
                } else {
                    return EMPTY
                }
            })
        )
    })

    // logout
    $autoLogout = createEffect(() => {
        return this._action$.pipe(
            ofType(autoLogout),
            tap((action) => {
                this._authService.removeLocalStorage();
                this._router.navigate(['auth'])
            })
        )
    }, { dispatch: false })


    // sign up start
    $signUp = createEffect(() => {
        return this._action$.pipe(
            ofType(signUpStart),
            exhaustMap((action) => {
                return this._authService.signUp(action.email, action.password).
                    pipe(map((data) => {
                        const user = this._authService.formatUser(data)
                        this._authService.setUserInLocalStorage(user)
                        return signUpSuccess({ user: user, redirect:true })
                    }),
                        catchError((errorResp) => {
                            const errorMesssage = this._authService.getErrorMessage(
                                errorResp.error.error.message)
                            return of(setErrorMessage({ message: errorMesssage }))
                        })
                    )
            })
        )
    })
}