import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/environments/environments'
import { TurfProfileState } from 'src/app/Models/app.models'

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

  setLocalStorageEmpty () {
    localStorage.removeItem('turf')
  }
}
