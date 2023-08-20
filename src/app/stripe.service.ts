import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  constructor () {}

  confirmCardPayment (val: string | null, obj: object) {
    return of({ client_secret: 'asdfhaskjh' })
  }
}
