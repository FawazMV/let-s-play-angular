import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import { catchError, exhaustMap, Observable, switchMap, throwError } from 'rxjs'
import { Store } from '@ngrx/store'
import {
  setErrorMessage,
  setLoadingSpinner
} from '../Modules/shared/redux/shared.actions'
import { getUserToken } from '../Modules/User/Pages/Auth/store/auth.selectors'

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor (private store: Store) {}

  intercept (
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(getUserToken).pipe(
      exhaustMap(token => {
        const clonedReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })

        return next.handle(clonedReq)
      })
    )
  }
}
