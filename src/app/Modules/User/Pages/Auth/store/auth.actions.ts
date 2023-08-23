import { createAction, props } from '@ngrx/store'
import { TokenState } from 'src/app/Models/app.models'
import { UserAuthState } from './auth.state'

export const loginStart = createAction(
  '[user auth page] login starting',
  props<{ email: string; password: string }>()
)

export const loginSuccess = createAction(
  '[user auth page] login successfull',
  props<{ user: TokenState; redirect: boolean }>()
)

export const signupStart = createAction(
  '[user auth page] signup start',
  props<{ email: string; mobileNumber: string }>()
)

export const otpConfirm = createAction(
  '[user auth page] otp confirm',
  props<{
    email: string
    password: string
    username: string
    mobileNumber: string
    otp: number
  }>()
)

export const signupConfirm = createAction(
  '[user auth page] signup confirm',
  props<{
    email: string
    password: string
    username: string
    mobileNumber: string
  }>()
)
export const autoLogin = createAction('[user auth page] autoLogin')

export const logOutAction = createAction('[user auth page] log out')
