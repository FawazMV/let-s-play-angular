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

        return next.handle(clonedReq).pipe(
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
            // Pass the error along the chain to allow the app to continue processing it.
            return throwError(error)
          })
        )
      })
    )
  }
}
