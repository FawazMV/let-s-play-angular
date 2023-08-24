import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { exhaustMap, Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { getTurfToken } from '../Modules/User/store/turf.selectors'

@Injectable({
  providedIn: 'platform'
})
export class TurfInterceptor implements HttpInterceptor {
  constructor (private store: Store) {}

  intercept (
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(getTurfToken).pipe(
      exhaustMap(token => {
        const cloneReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
        return next.handle(cloneReq)
      })
    )
  }
}
