import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { filter, map, Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { getUserToken } from '../Pages/Auth/store/auth.selectors'

@Injectable({
  providedIn: 'root'
})
export class LoggeInAuthGuard  {
  constructor (private store: Store, private router: Router) {}
  canActivate (): boolean {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/'])
      return false
    }
    return true
  }
}
