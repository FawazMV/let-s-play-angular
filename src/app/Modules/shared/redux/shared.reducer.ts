import { createReducer, on } from '@ngrx/store'
import {
  setErrorMessage,
  setLoadingSpinner,
  setModal,
  setOtp
} from './shared.actions'
import { intilalState } from './shared.state'

export const SharedReducer = createReducer(
  intilalState,
  on(setLoadingSpinner, (state, action) => {
    return { ...state, showLoading: action.status }
  }),
  on(setErrorMessage, (state, action) => {
    return { ...state, errorMessage: action.message }
  }),
  on(setModal, (state, action) => {
    return { ...state, modalMessage: action.message }
  }),
  on(setOtp, (state, action) => {
    return { ...state, showOTP: action.status }
  })
)
