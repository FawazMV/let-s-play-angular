import { createAction, props } from '@ngrx/store'
import { TurfProfileState } from 'src/app/Models/app.models'

export const fetchProfile = createAction('[turf profile] fetch profile start')

export const fetchProfileSuccess = createAction(
  '[turf profile] fetch profile success',
  props<{ data: TurfProfileState }>()
)

export const turfLogOutAction = createAction('[turf auth page] log out')
