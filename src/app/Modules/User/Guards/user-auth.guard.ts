import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { getUserToken } from '../Pages/Auth/store/auth.selectors'

export const userAuthGuard: CanActivateFn = (route, state) => {
  const store = inject(Store)
  const router = inject(Router)
  return new Promise<boolean>(resolve => {
    store.select(getUserToken).subscribe(data => {
      if (data) resolve(true)
      else {
        router.navigate([''])
        resolve(false)
      }
    })
  })
}

export const signGuard: CanActivateFn = (route, state) => {
  const store = inject(Store)
  const router = inject(Router)
  return new Promise<boolean>(resolve => {
    store.select(getUserToken).subscribe(data => {
      if (!data) resolve(true)
      else {
        router.navigate([''])
        resolve(false)
      }
    })
  })
}
