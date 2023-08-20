import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, exhaustMap, map, of } from 'rxjs'
import {
  setErrorMessage,
  setLoadingSpinner,
  setModal,
  setOtp
} from 'src/app/store/shared/shared.actions'
import { TurfService } from '../Services/turf.service'
import * as turfActions from './turfs.actions'
@Injectable()
export class TurfEffects {
  constructor (
    private actions$: Actions,
    private service: TurfService,
    private store: Store,
    private router: Router
  ) {}

  getAllTurfs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(turfActions.fetchAllTurfs),
      exhaustMap(() =>
        this.service.getAllTurfs().pipe(
          map(data => {
            return turfActions.fetchAllTurfsSuccess({ turfs: data })
          }),
          catchError(() => {
            return of(
              setErrorMessage({
                message:
                  'Something went wrong , please try again or try after sometime'
              })
            )
          })
        )
      )
    )
  })

  trufOtpsend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(turfActions.trufOtpsend),
      exhaustMap(action =>
        this.service.otpSend(action.email, action.mobile).pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            return setOtp({ status: true })
          }),
          catchError(errResp => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            const error = this.service.getErrorMessage(errResp.error.message)
            return of(setErrorMessage({ message: error }))
          })
        )
      )
    )
  })

  otpCofirm$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(turfActions.otpConfirm),
      exhaustMap(action =>
        this.service.otpCheck(action.mobile, action.otp).pipe(
          map(() => {
            return turfActions.registerConfirrm({ data: action.data })
          }),
          catchError(errResp => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            const error = this.service.getErrorMessage(errResp.error.message)
            return of(setErrorMessage({ message: error }))
          })
        )
      )
    )
  })

  signupCofirm$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(turfActions.registerConfirrm),
        exhaustMap(action =>
          this.service.register(action.data).pipe(
            map(() => {
              this.store.dispatch(setLoadingSpinner({ status: false }))
              this.store.dispatch(setOtp({ status: false }))
              this.store.dispatch(
                setModal({
                  message:
                    'Your turf registration request completed successfully'
                })
              )
            }),
            catchError(errResp => {
              this.store.dispatch(setLoadingSpinner({ status: false }))
              const error = this.service.getErrorMessage(errResp.error.message)
              return of(setErrorMessage({ message: error }))
            })
          )
        )
      )
    },
    { dispatch: false }
  )
}
