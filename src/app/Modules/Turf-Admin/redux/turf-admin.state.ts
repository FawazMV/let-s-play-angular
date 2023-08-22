import { TurfProfileState } from 'src/app/Models/app.models'

export interface TurfAdminState {
  profile: TurfProfileState
}

export const initialState: TurfAdminState = {
  profile: {
    _id: '',
    courtName: '',
    distric: '',
    email: '',
    event: '',
    images: [],
    location: '',
    loction_Details: '',
    mobile: '',
    state: ''
  }
}

export const TURF_STATE = 'turf-admin'
