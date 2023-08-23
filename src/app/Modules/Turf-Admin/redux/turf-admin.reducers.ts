import { createReducer, on } from '@ngrx/store'
import {
  fetchGraphDataSuccess,
  fetchTurfBookingSuccess,
  fetchTurfProfileSuccess,
  updateTurfProfileSuccess
} from './turf-admin.actions'

import { initialState } from './turf-admin.state'

const _turfReducer = createReducer(
  initialState,
  on(fetchTurfProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.data
    }
  }),
  on(updateTurfProfileSuccess, (state, action) => {
    const data = { ...state.profile, ...action.data }
    return {
      ...state,
      profile: data
    }
  }),
  on(fetchTurfBookingSuccess, (state, action) => {
    return {
      ...state,
      bookings: action.data
    }
  }),
  on(fetchGraphDataSuccess, (state, action) => {
    return {
      ...state,
      graphData: action.data
    }
  })
)

export function TurfAdminReducer (state: any, action: any) {
  return _turfReducer(state, action)
}
