import { props, createAction } from '@ngrx/store'

export const setLoadingSpinner = createAction(
  '[shared state] set loading spinner',
  props<{ status: boolean }>()
)

export const setOtp = createAction(
  '[shared state] set otp page',
  props<{ status: boolean }>()
)

export const setErrorMessage = createAction(
  '[shared state] set error message',
  props<{ message: string }>()
)

export const setModal = createAction(
  '[shared state] set Modal',
  props<{ message: string }>()
)
