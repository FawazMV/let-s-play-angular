import { TokenState, Turf } from 'src/app/Models/app.models'

export interface AllTurfsState {
  allturfs: Turf[]
  locatin: string | null
  turf: null | TokenState
}

export const initialState: AllTurfsState = {
  allturfs: [],
  locatin: null,
  turf: null
}

export const TURF_STATE = 'turfs'
