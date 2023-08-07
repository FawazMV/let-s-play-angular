import { UserAuthReducer } from '../Pages/Auth/store/auth.reducers'
import { UserAuthState, USER_AUTH_STATE } from '../Pages/Auth/store/auth.state'

export interface UserState {
  [USER_AUTH_STATE]: UserAuthState
}

export const userReducers = {
  [USER_AUTH_STATE]: UserAuthReducer
}
