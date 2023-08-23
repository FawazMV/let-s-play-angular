import {
  GraphData,
  TurfBookingDetails,
  TurfProfileState
} from 'src/app/Models/app.models'

export interface TurfAdminState {
  profile: TurfProfileState
  bookings: TurfBookingDetails[]
  graphData: GraphData[]
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
  },
  bookings: [],
  graphData: []
}

export const TURF_STATE = 'turf-admin'
