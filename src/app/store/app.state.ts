import { SharedReducer } from './shared/shared.reducer'
import { SharedState, SHARED_STATE_NAME } from './shared/shared.state'

export interface AppState {
  [SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer
}
