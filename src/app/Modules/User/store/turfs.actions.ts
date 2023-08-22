import { createAction, props } from '@ngrx/store'
import {
  Logindata,
  TokenState,
  Turf,
  TurfRegisterDetails
} from 'src/app/Models/app.models'

export const fetchAllTurfs = createAction(
  '[All turf page] fetching allTurfs start'
)

export const fetchAllTurfsSuccess = createAction(
  '[All turf page] fetching allTurfs start',
  props<{ turfs: Turf[] }>()
)

export const trufOtpsend = createAction(
  '[register turf] turf register otp send',
  props<{ email: string; mobile: string }>()
)

export const otpConfirm = createAction(
  '[register turf] turf register otp confirm',
  props<{ data: FormData; otp: number; mobile: string }>()
)

export const registerConfirrm = createAction(
  '[register turf] turf register confirm',
  props<{ data: FormData }>()
)

export const turfLoginstart = createAction(
  '[turf login page] login start',
  props<Logindata>()
)

export const turfLoginSuccess = createAction(
  '[turf auth page] login success',
  props<{ turf: TokenState; redirect: boolean }>()
)

export const turfAutoLogin = createAction('[turf auth page] autoLogin')

export const turfLogOutAction = createAction('[turf auth page] log out')
