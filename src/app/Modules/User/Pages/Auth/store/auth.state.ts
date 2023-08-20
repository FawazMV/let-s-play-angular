import { TokenState } from 'src/app/Models/app.models'

export interface UserAuthState {
  user: null | TokenState
}

export const initialState: UserAuthState = {
  user: null
}

export const USER_AUTH_STATE = 'userAuth'
