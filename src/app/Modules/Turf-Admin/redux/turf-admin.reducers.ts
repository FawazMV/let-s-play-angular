import { createReducer, on } from '@ngrx/store'
import { fetchProfileSuccess, turfLogOutAction } from './turf-admin.actions'

import { initialState } from './turf-admin.state'

const _turfReducer = createReducer(
  initialState,
  on(fetchProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.data
    }
  }),

  on(turfLogOutAction, state => {
    return {
      ...state,
      turf: null
    }
  })
)

export function TurfAdminReducer (state: any, action: any) {
  return _turfReducer(state, action)
}
