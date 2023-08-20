import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environments'
import { MapBoxResutl } from '../Models/app.models'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor (private http: HttpClient) {}

  getMapBoxlist (value: string) {
    return this.http.get<MapBoxResutl>(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?country=IN&types=locality,district&access_token=${environment.config.mapBoxToken}`
    )
  }
}
