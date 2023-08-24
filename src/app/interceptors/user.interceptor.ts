import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { exhaustMap, Observable } from 'rxjs'
import { Store } from '@ngrx/store'

import { getUserToken } from '../Modules/User/Pages/Auth/store/auth.selectors'
import { environment } from '../environments/environments'

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor (private store: Store) {}

  private userApi = environment.config.userApi

  intercept (
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const skipUrls = [
      this.userApi + '/login',
      this.userApi + '/register-user',
      this.userApi + '/otp-send',
      +this.userApi + '/verify-otp'
    ]
    if (skipUrls.some(url => request.url.includes(url))) {
      return next.handle(request)
    }

    return this.store.select(getUserToken).pipe(
      exhaustMap(token => {
        const clonedReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
        if (skipUrls.some(url => request.url.includes(url)) && token)
          return new Observable<HttpEvent<any>>()

        return next.handle(clonedReq)
      })
    )
  }
}
