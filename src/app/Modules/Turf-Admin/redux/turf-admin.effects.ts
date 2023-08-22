import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, exhaustMap, map, of, tap } from 'rxjs'
import { TokenState } from 'src/app/Models/app.models'
import {
  setErrorMessage,
  setLoadingSpinner,
  setModal,
  setOtp
} from 'src/app/Modules/shared/redux/shared.actions'
import { TurfAdminService } from '../Services/turf-admin.service'
import * as turfActions from './turf-admin.actions'
@Injectable()
export class TurfAdminEffects {
  constructor (
    private actions$: Actions,
    private service: TurfAdminService,
    private store: Store,
    private router: Router
  ) {}

  getTurfProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(turfActions.fetchProfile),
      exhaustMap(() =>
        this.service.getProfile().pipe(
          map(data => {
            return turfActions.fetchProfileSuccess({ data })
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

  logOutAction$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(turfActions.turfLogOutAction),
        tap(() => {
          this.service.setLocalStorageEmpty()
          this.router.navigate(['/turf-login'])
        })
      )
    },
    { dispatch: false }
  )
}
