import { createReducer, on } from '@ngrx/store'
import * as actions from './turf-admin.actions'

import { initialState, TurfAdminState } from './turf-admin.state'

const _turfReducer = createReducer(
  initialState,
  on(actions.fetchTurfProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.data
    }
  }),
  on(actions.updateTurfProfileSuccess, (state, action) => {
    const data = { ...state.profile, ...action.data }
    return {
      ...state,
      profile: data
    }
  }),
  on(actions.fetchTurfBookingSuccess, (state, action) => {
    return {
      ...state,
      bookings: action.data
    }
  }),
  on(actions.fetchGraphDataSuccess, (state, action) => {
    return {
      ...state,
      graphData: action.data
    }
  })
)

export function TurfAdminReducer (state: TurfAdminState, action: any) {
  return _turfReducer(state, action)
}
