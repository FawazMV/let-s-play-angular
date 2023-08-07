import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, exhaustMap, map, of } from 'rxjs'
import { tokenState } from 'src/app/Models/app.models'
import {
  setErrorMessage,
  setLoadingSpinner
} from 'src/app/store/shared/shared.actions'
import { UserAuthServiceService } from '../../../Services/user-auth.service'
import { loginStart, loginSuccess } from './auth.actions'

@Injectable()
export class UserAuthEffects {
  constructor (
    private actions$: Actions,
    private service: UserAuthServiceService,
    private store: Store
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap(action =>
        this.service.login(action.email, action.password).pipe(
          map((data: tokenState | any) => {
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
}
