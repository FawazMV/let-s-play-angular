import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/app/environments/environments'
import { TokenState } from 'src/app/Models/app.models'

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {
  private url = environment.config.userApi
  constructor (private http: HttpClient) {}

  login (email: string, password: string): Observable<TokenState> {
    return this.http.post<TokenState>(this.url + '/login', { email, password })
  }

  signup (email: string, password: string, username: string, mobile: string) {
    return this.http.post(this.url + '/register-user', {
      email,
      password,
      username,
      mobile
    })
  }

  otpSend (email: string, mobile: string) {
    return this.http.post(this.url + '/otp-send', {
      email,
      mobile
    })
  }

  otpCheck (mobile: string, otp: number) {
    return this.http.post(this.url + '/verify-otp', {
      otp,
      mobile
    })
  }

  setUserLocalStorage (data: TokenState) {
    localStorage.setItem('user', data.token)
  }
  getUserLocalStorage (): string | null {
    return localStorage.getItem('user')
  }

  setLocalStorageEmpty () {
    localStorage.removeItem('user')
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
