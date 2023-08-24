import { UserAuthReducer } from '../Modules/User/Pages/Auth/store/auth.reducers'
import {
  UserAuthState,
  USER_AUTH_STATE
} from '../Modules/User/Pages/Auth/store/auth.state'
import { TurfReducer } from '../Modules/User/store/turfs.reducers'
import { AllTurfsState, TURF_STATE } from '../Modules/User/store/turfs.state'
import { SharedReducer } from '../Modules/shared/redux/shared.reducer'
import {
  SharedState,
  SHARED_STATE_NAME
} from '../Modules/shared/redux/shared.state'

export interface AppState {
  [SHARED_STATE_NAME]: SharedState
  [USER_AUTH_STATE]: UserAuthState
  [TURF_STATE]: AllTurfsState
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [USER_AUTH_STATE]: UserAuthReducer,
  [TURF_STATE]: TurfReducer
}
