import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { map } from 'rxjs'
import { Store } from '@ngrx/store'
import { getUserToken } from '../Pages/Auth/store/auth.selectors'

@Injectable({
  providedIn: 'root'
})
export class LoggeInAuthGuard {
  constructor (private store: Store, private router: Router) {}

  canActivate () {
    return this.store.select(getUserToken).pipe(
      map(user => {
        if (user) return true
        else return this.router.navigate(['/'])
      })
    )
  }
}
