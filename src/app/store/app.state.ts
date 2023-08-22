import { UserAuthReducer } from '../Modules/User/Pages/Auth/store/auth.reducers'
import { USER_AUTH_STATE } from '../Modules/User/Pages/Auth/store/auth.state'
import { TurfReducer } from '../Modules/User/store/turfs.reducers'
import { TURF_STATE } from '../Modules/User/store/turfs.state'
import { SharedReducer } from '../Modules/shared/redux/shared.reducer'
import {
  SharedState,
  SHARED_STATE_NAME
} from '../Modules/shared/redux/shared.state'

export interface AppState {
  [SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [USER_AUTH_STATE]: UserAuthReducer,
  [TURF_STATE]: TurfReducer
}
