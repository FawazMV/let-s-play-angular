import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs'
import { TokenState } from 'src/app/Models/app.models'
import {
  setErrorMessage,
  setLoadingSpinner,
  setOtp
} from 'src/app/store/shared/shared.actions'
import { UserAuthServiceService } from '../../../Services/user-auth.service'
import {
  autoLogin,
  loginStart,
  loginSuccess,
  logOutAction,
  otpConfirm,
  signupConfirm,
  signupStart
} from './auth.actions'

@Injectable()
export class UserAuthEffects {
  constructor (
    private actions$: Actions,
    private service: UserAuthServiceService,
    private store: Store,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap(action =>
        this.service.login(action.email, action.password).pipe(
          map((data: TokenState | any) => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            this.service.setUserLocalStorage(data)
            return loginSuccess({ user: data, redirect: true })
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

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(action => {
          if (action.redirect) this.router.navigate(['/'])
        })
      )
    },
    { dispatch: false }
  )

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap(action =>
        this.service.otpSend(action.email, action.mobileNumber).pipe(
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
      ofType(otpConfirm),
      exhaustMap(action =>
        this.service.otpCheck(action.mobileNumber, action.otp).pipe(
          map(() => {
            return signupConfirm({
              email: action.email,
              password: action.password,
              username: action.username,
              mobileNumber: action.mobileNumber
            })
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

  signupCofirm$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupConfirm),
      exhaustMap(action =>
        this.service
          .signup(
            action.email,
            action.password,
            action.username,
            action.mobileNumber
          )
          .pipe(
            map(() => {
              this.store.dispatch(setLoadingSpinner({ status: false }))
              this.router.navigate(['/login'])
              this.store.dispatch(setLoadingSpinner({ status: true }))
              return loginStart({
                email: action.email,
                password: action.password
              })
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

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap(() => {
        const data = this.service.getUserLocalStorage()
        if (data)
          return of(loginSuccess({ user: { token: data }, redirect: false }))
        return of()
      })
    )
  })

  logOutAction$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logOutAction),
        tap(() => {
          this.service.setLocalStorageEmpty()
          this.router.navigate([''])
        })
      )
    },
    { dispatch: false }
  )
}
