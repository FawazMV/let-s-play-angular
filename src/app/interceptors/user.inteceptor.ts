import { Injectable } from '@angular/core'
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, switchMap, take } from 'rxjs/operators'
import { Store } from '@ngrx/store'
import { getUserToken } from '../Modules/User/Pages/Auth/store/auth.selectors'
import {
  setErrorMessage,
  setLoadingSpinner
} from '../store/shared/shared.actions'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (private store: Store) {}

  intercept (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getUserToken).pipe(
      take(1),
      switchMap(token => {
        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })

        return next.handle(clonedReq).pipe(
          catchError((error: HttpErrorResponse) => {
            // Handle the error here, for example, log it, show a notification, etc.
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
