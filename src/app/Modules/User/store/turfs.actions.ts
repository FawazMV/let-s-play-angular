import { createAction, props } from '@ngrx/store'
import { Turf } from 'src/app/Models/app.models'

export const fetchAllTurfs = createAction(
  '[All turf page] fetching allTurfs start'
)

export const fetchAllTurfsSuccess = createAction(
  '[All turf page] fetching allTurfs start',
  props<{ turfs: Turf[] }>()
)

// export const signupStart = createAction(
//   '[All turf page] signup start',
//   props<{ email: string; mobileNumber: string }>()
// )

// export const otpConfirm = createAction(
//   '[All turf page] otp confirm',
//   props<{
//     email: string
//     password: string
//     username: string
//     mobileNumber: string
//     otp: number
//   }>()
// )

// export const signupConfirm = createAction(
//   '[All turf page] signup confirm',
//   props<{
//     email: string
//     password: string
//     username: string
//     mobileNumber: string
//   }>()
// )
// export const autoLogin = createAction('[All turf page] autoLogin')

// export const logOut = createAction('[All turf page] log out')
