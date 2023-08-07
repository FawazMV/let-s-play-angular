import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tokenState } from 'src/app/Models/app.models'

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {
  private url = 'https://let-s-play-user-service.onrender.com'
  constructor (private http: HttpClient) {}

  login (email: string, password: string): Observable<tokenState> {
    console.log('first login')
    return this.http.post<tokenState>(this.url + '/login', { email, password })
  }

  setUserLocalStorage (data: tokenState) {
    localStorage.setItem('user', data.token)
  }

  getErrorMessage (message: string) {
    switch (message) {
      case 'Email Id not found':
        return 'Email Id not found'
      case 'Invalid credentials.':
        return 'Invalid credentials'
      case 'Duplicate found':
        return 'Email Id already registered'
      default:
        return 'Unknow error occurred. Please try again'
    }
  }
}
