import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import { catchError, finalize } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { Store } from '@ngrx/store'
import { setErrorMessage } from '../Modules/shared/redux/shared.actions'
import { environment } from '../environments/environments'
import { LoaderService } from '../Services/loader.service'

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor (private store: Store, private service: LoaderService) {}

  private turfurl = environment.config.turfApi

  intercept (request: HttpRequest<any>, next: HttpHandler) {
    const skipUrls = [this.turfurl + '/turfs']
    if (skipUrls.some(url => request.url.includes(url))) {
      return next.handle(request)
    }

    this.service.show()

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage =
          error.error?.message ||
          error.error?.error ||
          'Some things went wrong! Please try again'
        this.store.dispatch(setErrorMessage({ message: errorMessage }))
        console.error('HTTP Error:', error)
        return throwError(error)
      }),
      finalize(() => {
        this.service.hide()
      })
    )
  }
}
