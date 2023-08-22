import { createFeatureSelector, createSelector } from '@ngrx/store'
import { TurfAdminState, TURF_STATE } from './turf-admin.state'

const getTurfState = createFeatureSelector<TurfAdminState>(TURF_STATE)

export const getTurfProfile = createSelector(getTurfState, state => {
  return state.profile
})

// export const getSingleTurf = (id: string) => {
//   return createSelector(getTurfState, state => {
//     return state.allturfs?.find(t => t._id === id)
//   })
// }

// export const getTurfToken = createSelector(getTurfState, state => {
//   return state?.turf?.token
// })
