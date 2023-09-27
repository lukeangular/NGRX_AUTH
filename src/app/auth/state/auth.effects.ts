import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class AuthEffect {
    constructor(
        private _action$: Actions,
        private _authService: AuthService
    ) { }

    login$ = createEffect(() => {
        return this._action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this._authService.login(action.email, action.password).
                    pipe(map((data) => {
                        const user = this._authService.formatUser(data)
                        return loginSuccess({ user })
                    }))
            })
        )
    })
}