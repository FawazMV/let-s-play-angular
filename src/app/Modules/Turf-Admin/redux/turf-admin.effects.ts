import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { exhaustMap, map, switchMap, tap } from 'rxjs'
import { setModal } from 'src/app/Modules/shared/redux/shared.actions'
import { TurfAdminService } from '../Services/turf-admin.service'
import {
  fetchTurfProfile,
  fetchTurfProfileSuccess,
  updateTurfProfile,
  updateTurfProfileSuccess
} from './turf-admin.actions'
@Injectable()
export class TurfAdminEffects {
  constructor (
    private actions$: Actions,
    private service: TurfAdminService,
    private store: Store
  ) {}

  getTurfProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchTurfProfile),
      exhaustMap(() =>
        this.service.getProfile().pipe(
          map(data => {
            return fetchTurfProfileSuccess({ data })
          })
        )
      )
    )
  })

  updateTurfProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTurfProfile),
      switchMap(data =>
        this.service.updateProfile(data.data).pipe(
          map(() => {
            return updateTurfProfileSuccess({ data: data.data })
          })
        )
      )
    )
  })

  updateTurfSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateTurfProfileSuccess),
        map(() =>
          this.store.dispatch(
            setModal({ message: 'Profile Updated Successfully' })
          )
        )
      )
    },
    { dispatch: false }
  )
}
