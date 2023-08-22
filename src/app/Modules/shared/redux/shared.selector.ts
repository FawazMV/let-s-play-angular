import { createFeatureSelector, createSelector } from '@ngrx/store'
import { SharedState, SHARED_STATE_NAME } from './shared.state'

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME)

export const getLoading = createSelector(getSharedState, state => {
  return state.showLoading
})

export const errorMessageSelector = createSelector(
  getSharedState,
  state => state.errorMessage
)

export const modalMessageSelector = createSelector(
  getSharedState,
  state => state.modalMessage
)

export const otpSelector = createSelector(
  getSharedState,
  state => state.showOTP
)
