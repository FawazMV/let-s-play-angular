import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/environments/environments'
import { Turf, TurfRegisterDetails } from 'src/app/Models/app.models'

@Injectable({
  providedIn: 'root'
})
export class TurfService {
  private url = environment.config.turfApi
  constructor (private http: HttpClient) {}

  getAllTurfs () {
    return this.http.get<Turf[]>(this.url + '/turfs')
  }

  otpSend (email: string, mobile: string) {
    return this.http.post(this.url + '/send-otp', { email, mobile })
  }

  otpCheck (mobile: string, otp: number | undefined) {
    return this.http.post(this.url + '/otp', {
      otp,
      mobile
    })
  }

  register (values: FormData) {
    return this.http.post(this.url + '/turf-registration', values)
  }

  getBookedSlots (date: Date, id: string) {
    return this.http.get<[]>(this.url + `/booked-slots?date=${date}&id=${id}`)
  }

  getErrorMessage (message: string) {
    switch (message) {
      case 'Email Id not found':
        return 'Email Id not found'
      case 'Invalid credentials.':
        return 'Invalid credentials'
      case 'Invalid credentials..':
        return 'Invalid credentials'
      case 'Duplicate found':
        return 'Email Id already registered'
      default: {
        if (message) return message
        return 'Unknow error occurred. Please try again'
      }
    }
  }
}
