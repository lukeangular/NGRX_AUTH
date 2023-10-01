import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppSate } from '../appstate/app.state';
import { getToken } from '../auth/state/auth.selector';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(
    private _store: Store<AppSate>
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this._store.select(getToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          return next.handle(request)
        }
        let modifiedReq = request.clone({
          params: request.params.append('auth', token)
        })
        return next.handle(modifiedReq)
      }))
  }
}
