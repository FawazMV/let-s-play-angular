// import { Injectable } from '@angular/core'
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse
// } from '@angular/common/http'
// import { catchError, finalize } from 'rxjs/operators'
// import { throwError } from 'rxjs'
// import { Store } from '@ngrx/store'
// import {
//   setLoadingSpinner,
//   setErrorMessage
// } from '../Modules/shared/redux/shared.actions'
// import { environment } from '../environments/environments'

// @Injectable()
// export class LoaderInterceptor implements HttpInterceptor {
//   constructor (private store: Store) {}
//   private turfurl = environment.config.turfApi
//   intercept (request: HttpRequest<any>, next: HttpHandler) {
//     const skipUrls = [this.turfurl]
//     console.log('working')

//     if (!skipUrls.some(url => request.url.includes(url))) {
//       return next.handle(request)
//     }

//     this.store.dispatch(setLoadingSpinner({ status: true }))

//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         let errorMessage =
//           error.error?.message ||
//           error.error?.error ||
//           'Some things went wrong! Please try again'
//         this.store.dispatch(setErrorMessage({ message: errorMessage }))
//         console.error('HTTP Error:', error)
//         return throwError(error)
//       }),
//       finalize(() => {
//         console.log('second working')
//         this.store.dispatch(setLoadingSpinner({ status: false }))
//       })
//     )
//   }
// }
