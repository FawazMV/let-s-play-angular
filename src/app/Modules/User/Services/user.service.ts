import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { environment } from 'src/app/environments/environments'
import { UserProfile, UserProfileUpdateData } from 'src/app/Models/app.models'
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.config.userApi

  constructor (private http: HttpClient, private store: Store) {}

  getProfileDetails () {
    return this.http.get<UserProfile>(this.url + '/profile/user-details')
  }

  updateProfile (values: UserProfileUpdateData) {
    return this.http.put<UserProfile>(this.url + '/profile/update', values)
  }
}
