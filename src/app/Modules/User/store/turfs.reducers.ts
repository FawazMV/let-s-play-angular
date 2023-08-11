import { createReducer, on } from '@ngrx/store'
import { fetchAllTurfsSuccess } from './turfs.actions'
import { initialState } from './turfs.state'

const _turfReducer = createReducer(
  initialState,
  on(fetchAllTurfsSuccess, (state, action) => {
    return {
      ...state,
      allturfs: action.turfs
    }
  })
)

export function TurfReducer (state: any, action: any) {
  return _turfReducer(state, action)
}
