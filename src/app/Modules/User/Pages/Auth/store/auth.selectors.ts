import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UserAuthState, USER_AUTH_STATE } from './auth.state'

const getAuthState = createFeatureSelector<UserAuthState>(USER_AUTH_STATE)

export const getUserToken = createSelector(getAuthState, state => {
  return state?.user?.token
})
