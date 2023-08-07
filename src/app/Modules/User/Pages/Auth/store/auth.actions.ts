import { createAction, props } from '@ngrx/store'
import { tokenState, userLoginInput } from 'src/app/Models/app.models'
import { UserAuthState } from './auth.state'

export const loginStart = createAction(
  '[user auth page] login start',
  props<{ email: string; password: string }>()
)

export const loginSuccess = createAction(
  '[user auth page] login success',
  props<{ user: tokenState; redirect: boolean }>()
)
