import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/environments/environments'
import { Turf } from 'src/app/Models/app.models'

@Injectable({
  providedIn: 'root'
})
export class TurfService {
  private url = environment.config.turfApi
  constructor (private http: HttpClient) {}

  getAllTurfs () {
    return this.http.get<Turf[]>(this.url + '/turfs')
  }
}
