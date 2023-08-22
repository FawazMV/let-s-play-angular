import { inject } from '@angular/core'
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { getUserToken } from '../Pages/Auth/store/auth.selectors'
import { getTurfToken } from '../store/turf.selectors'

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

export const TurfAuthGuard: CanActivateChildFn = (route, state) => {
  const store = inject(Store)
  const router = inject(Router)
  return new Promise<boolean>(resolve => {
    store.select(getTurfToken).subscribe(data => {
      if (data) resolve(true)
      else {
        router.navigate(['/turf-login'])
        resolve(false)
      }
    })
  })
}

export const turfSignGuard: CanActivateFn = (route, state) => {
  const store = inject(Store)
  const router = inject(Router)
  return new Promise<boolean>(resolve => {
    store.select(getTurfToken).subscribe(data => {
      if (!data) resolve(true)
      else {
        router.navigate(['/turf-admin'])
        resolve(false)
      }
    })
  })
}
