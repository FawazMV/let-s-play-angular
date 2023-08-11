import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Turf } from 'src/app/Models/app.models'

@Injectable({
  providedIn: 'root'
})
export class TurfService {
  private url = 'https://let-s-play-turf-service.onrender.com'
  constructor (private http: HttpClient) {}

  getAllTurfs () {
    return this.http.get<Turf[]>(this.url + '/turfs')
  }
}
