import { createFeatureSelector, createSelector } from '@ngrx/store'
import { TurfAdminState, TURF_STATE } from './turf-admin.state'

const getTurfState = createFeatureSelector<TurfAdminState>(TURF_STATE)

export const getTurfProfile = createSelector(getTurfState, state => {
  return state.profile
})

export const getTurfBookings = createSelector(getTurfState, state => {
  return state.bookings
})

export const getGraphData = createSelector(getTurfState, state => {
  return state.graphData
})
