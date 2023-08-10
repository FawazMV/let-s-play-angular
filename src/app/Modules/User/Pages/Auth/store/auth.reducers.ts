import { Action, createReducer, on } from '@ngrx/store'
import { loginSuccess } from './auth.actions'
import { initialState, UserAuthState } from './auth.state'

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: { token: action.user.token }
    }
  })
)

export function UserAuthReducer (state: any, action: any) {
  return _authReducer(state, action)
}
