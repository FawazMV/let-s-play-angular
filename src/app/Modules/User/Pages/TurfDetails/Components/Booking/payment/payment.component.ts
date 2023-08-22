import { HttpClient } from '@angular/common/http'
import { Component, Input, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { PaymentIntent, StripeCardElementOptions } from '@stripe/stripe-js'
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe'
import { Observable, switchMap, tap } from 'rxjs'
import { environment } from 'src/app/environments/environments'
import { PaymentService } from 'src/app/Modules/User/Services/payment.service'
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor (
    private service: PaymentService,
    private router: Router,
    private store: Store
  ) {}
  @ViewChild(StripeCardNumberComponent) card!: StripeCardNumberComponent
  @Input() date!: Date
  @Input() turf!: string
  @Input() time!: string
  private bookId!: string
  private paytIntent!: PaymentIntent

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        fontWeight: 400,
        fontFamily: 'Circular',
        fontSize: '14px',
        iconColor: '#666EE8',
        color: '#002333',
        '::placeholder': {
          color: '#919191'
        }
      }
    }
  }

  pay () {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    const sub = this.service
      .confirmPay(this.paytIntent, this.card)
      .pipe(
        switchMap(res => {
          if (res.error) {
            return this.service.payFail(this.bookId).pipe(
              tap(() => {
                // sub.unsubscribe()
                this.store.dispatch(setLoadingSpinner({ status: false }))
                this.router.navigate(['/payment-errors'])
              })
            )
          } else {
            return this.service.paymentSuccess(this.bookId).pipe(
              tap(data => {
                this.store.dispatch(setLoadingSpinner({ status: false }))
                this.router.navigate(['/success-page'], {
                  queryParams: data
                })
              })
            )
          }
        })
      )
      .subscribe()
  }

  ngOnInit () {
    this.getPaymentIntent()
  }
  ngOnDestroy () {}
  getPaymentIntent () {
    const val = this.service
      .getBookingId(this.date, this.time, this.turf)
      .pipe(
        switchMap(data => {
          this.bookId = data.booking_id
          return this.service.getPayIntent(data.booking_id)
        })
      )
      .subscribe(data => {
        this.paytIntent = data.paymentIntent
        this.store.dispatch(setLoadingSpinner({ status: false }))
        // val.unsubscribe()
      })
  }
}
