import { createAction, props } from '@ngrx/store'
import {
  GraphData,
  TurfBookingDetails,
  TurfProfileState
} from 'src/app/Models/app.models'

export const fetchTurfProfile = createAction(
  '[turf profile] fetch profile start'
)

export const fetchTurfProfileSuccess = createAction(
  '[turf profile] fetch profile success',
  props<{ data: TurfProfileState }>()
)

export const updateTurfProfile = createAction(
  '[turf profile] update turf profile start',
  props<{ data: FormData }>()
)

export const updateTurfProfileSuccess = createAction(
  '[turf profile] update turf  profile success',
  props<{ data: FormData }>()
)

export const fetchTurfBookings = createAction(
  '[turf bookings] fetch bookings start'
)

export const fetchTurfBookingSuccess = createAction(
  '[turf GraphDat] fetch GraphDat success',
  props<{ data: TurfBookingDetails[] }>()
)

export const fetchGraphData = createAction(
  '[turf GraphDat] fetch GraphDat start'
)

export const fetchGraphDataSuccess = createAction(
  '[turf bookings] fetch bookings success',
  props<{ data: GraphData[] }>()
)

// export const turfLogOutAction = createAction('[turf auth page] log out')
