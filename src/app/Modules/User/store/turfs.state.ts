import { Turf } from 'src/app/Models/app.models'

export interface AllTurfsState {
  allturfs: Turf[]
  locatin: string | null
}

export const initialState: AllTurfsState = {
  allturfs: [],
  locatin: null
}

export const TURF_STATE = 'turfs'
