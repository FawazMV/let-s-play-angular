import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/environments/environments'
import {
  GraphData,
  TurfBookingDetails,
  TurfProfileState
} from 'src/app/Models/app.models'

@Injectable()
export class TurfAdminService {
  private url = environment.config.turfApi
  constructor (private http: HttpClient) {}

  getProfile () {
    return this.http.get<TurfProfileState>(this.url + '/turf-profile')
  }

  updateProfile (data: FormData) {
    return this.http.put(this.url + '/update-turf-profile', data)
  }

  getTurfBookings () {
    return this.http.get<TurfBookingDetails[]>(this.url + '/booked-details')
  }

  getBookingCount () {
    return this.http.get<{ today: number; total: number }>(
      this.url + '/turf-bookings-count'
    )
  }

  getTurfGraphData () {
    return this.http.get<{ monthlyReport: GraphData[] }>(
      this.url + '/turf-graph-data'
    )
  }

  setLocalStorageEmpty () {
    localStorage.removeItem('turf')
  }
}
