import { tokenState } from 'src/app/Models/app.models'

export interface UserAuthState {
  user: null | tokenState
}

export const initialState: UserAuthState = {
  user: null
}

export const USER_AUTH_STATE = 'userAuth'
