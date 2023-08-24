import { createReducer, on } from '@ngrx/store'
import { Action } from 'rxjs/internal/scheduler/Action'
import {
  fetchAllTurfsSuccess,
  turfLoginSuccess,
  turfLogOutAction
} from './turfs.actions'
import { AllTurfsState, initialState } from './turfs.state'

const _turfReducer = createReducer(
  initialState,
  on(fetchAllTurfsSuccess, (state, action) => {
    return {
      ...state,
      allturfs: action.turfs
    }
  }),
  on(turfLoginSuccess, (state, action) => {
    return {
      ...state,
      turf: { token: action.turf.token }
    }
  }),
  on(turfLogOutAction, state => {
    return {
      ...state,
      turf: null
    }
  })
)

export function TurfReducer (state: any, action: any) {
  return _turfReducer(state, action)
}
