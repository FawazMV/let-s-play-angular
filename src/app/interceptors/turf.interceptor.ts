import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import {
  catchError,
  exhaustMap,
  finalize,
  Observable,
  switchMap,
  throwError
} from 'rxjs'
import { Store } from '@ngrx/store'
import { getTurfToken } from '../Modules/User/store/turf.selectors'
import {
  setErrorMessage,
  setLoadingSpinner
} from '../Modules/shared/redux/shared.actions'

@Injectable({
  providedIn: 'platform'
})
export class TurfInterceptor implements HttpInterceptor {
  constructor (private store: Store) {}

  intercept (
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    return this.store.select(getTurfToken).pipe(
      exhaustMap(token => {
        const cloneReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
        return next.handle(cloneReq).pipe(
          catchError((error: HttpErrorResponse) => {
            let errorMessage = error.error?.message
              ? error.error.message
              : error.error?.error
            this.store.dispatch(setLoadingSpinner({ status: false }))
            this.store.dispatch(
              setErrorMessage({
                message: errorMessage
                  ? errorMessage
                  : 'Some things went wrong! Please try again'
              })
            )
            console.error('HTTP Error:', error)
            return throwError(error)
          }),
          finalize(() => {
            console.log('second working')
            this.store.dispatch(setLoadingSpinner({ status: false }))
          })
        )
      })
    )
  }
}
