import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppSate } from 'src/app/appstate/app.state';
import { isUserAuthenticated } from 'src/app/auth/state/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurd implements CanActivate {
  constructor(
    private _store: Store<AppSate>,
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean
      | UrlTree> {
    return this._store.select(isUserAuthenticated).pipe(map((authenticate) => {
      console.warn("authenticate ", authenticate)
      if (authenticate) {
        return this._router.createUrlTree([''])
      }
      return true
    }))
  }
}