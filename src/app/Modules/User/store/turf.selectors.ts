import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AllTurfsState, TURF_STATE } from './turfs.state'

const getTurfState = createFeatureSelector<AllTurfsState>(TURF_STATE)

export const getAllTurfs = createSelector(getTurfState, state => {
  return state?.allturfs
})

export const getSingleTurf = (id: string) => {
  return createSelector(getTurfState, state => {
    return state.allturfs?.find(t => t._id === id)
  })
}

export const getTurfToken = createSelector(getTurfState, state => {
  return state?.turf?.token
})
