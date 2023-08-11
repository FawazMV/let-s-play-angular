import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, exhaustMap, map, of } from 'rxjs'
import { setErrorMessage } from 'src/app/store/shared/shared.actions'
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
}
