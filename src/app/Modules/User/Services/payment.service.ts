import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { PaymentIntent } from '@stripe/stripe-js'
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe'
import { environment } from 'src/app/environments/environments'
import { SuccessPageData } from 'src/app/Models/app.models'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private url = environment.config.userApi
  constructor (private http: HttpClient, private stripe: StripeService) {}

  getBookingId (date: Date, time: string, turf: string) {
    return this.http.post<{ booking_id: string }>(this.url + '/book/slot', {
      date,
      time,
      turf
    })
  }

  getPayIntent (id: string) {
    return this.http.get<{ paymentIntent: PaymentIntent; book_id: string }>(
      this.url + '/book/payment?book_id=' + id + '&intent=' + true
    )
  }

  confirmPay (intent: PaymentIntent, card: StripeCardNumberComponent) {
    return this.stripe.confirmCardPayment(intent?.client_secret, {
      payment_method: {
        card: card.element,
        billing_details: {
          name: intent.receipt_email
        }
      }
    })
  }

  paymentSuccess (id: string) {
    return this.http.put<SuccessPageData>(this.url + '/book/booking-success', {
      id
    })
  }

  payFail (id: string) {
    return this.http.put(this.url + '/book/booking-failed', { id })
  }
}
