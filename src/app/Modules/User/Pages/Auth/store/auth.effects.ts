import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, map, of, switchMap, tap } from 'rxjs'
import { TokenState } from 'src/app/Models/app.models'
import { setOtp } from 'src/app/Modules/shared/redux/shared.actions'
import { UserAuthServiceService } from '../../../Services/user-auth.service'
import * as authActions from './auth.actions'

@Injectable()
export class UserAuthEffects {
  constructor (
    private actions$: Actions,
    private service: UserAuthServiceService,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.loginStart),
      switchMap(action =>
        this.service.login(action.email, action.password).pipe(
          map((data: TokenState | any) => {
            this.service.setUserLocalStorage(data)
            return authActions.loginSuccess({ user: data, redirect: true })
          })
        )
      )
    )
  })

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.loginSuccess),
        tap(action => {
          if (action.redirect) this.router.navigate(['/'])
        })
      )
    },
    { dispatch: false }
  )

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signupStart),
      exhaustMap(action =>
        this.service.otpSend(action.email, action.mobileNumber).pipe(
          map(data => {
            return setOtp({ status: true })
          })
        )
      )
    )
  })

  otpCofirm$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.otpConfirm),
      exhaustMap(action =>
        this.service.otpCheck(action.mobileNumber, action.otp).pipe(
          map(() => {
            return authActions.signupConfirm({
              email: action.email,
              password: action.password,
              username: action.username,
              mobileNumber: action.mobileNumber
            })
          })
        )
      )
    )
  })

  signupCofirm$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signupConfirm),
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
              this.router.navigate(['/login'])
              return authActions.loginStart({
                email: action.email,
                password: action.password
              })
            })
          )
      )
    )
  })

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.autoLogin),
      exhaustMap(() => {
        const data = this.service.getUserLocalStorage()
        if (data)
          return of(
            authActions.loginSuccess({ user: { token: data }, redirect: false })
          )
        return of()
      })
    )
  })

  logOutAction$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.logOutAction),
        tap(() => {
          this.service.setLocalStorageEmpty()
          this.router.navigate([''])
        })
      )
    },
    { dispatch: false }
  )
}
