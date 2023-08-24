import { Component, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { PaymentIntent, StripeCardElementOptions } from '@stripe/stripe-js'
import { StripeCardNumberComponent } from 'ngx-stripe'
import { exhaustMap, Subscription, switchMap, tap } from 'rxjs'
import { PaymentService } from 'src/app/Modules/User/Services/payment.service'

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

  isDisabled = false
  private bookId!: string
  private paytIntent!: PaymentIntent
  sub$!: Subscription
  sub1$!: Subscription
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
    this.isDisabled = true
    this.sub$ = this.service
      .confirmPay(this.paytIntent, this.card)
      .pipe(
        exhaustMap(res => {
          if (res.error) {
            return this.service.payFail(this.bookId).pipe(
              tap(() => {
                this.router.navigate(['/payment-errors'])
              })
            )
          } else {
            return this.service.paymentSuccess(this.bookId).pipe(
              tap(data => {
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
  ngOnDestroy () {
    this.sub$.unsubscribe()
    this.sub1$.unsubscribe()
  }
  getPaymentIntent () {
    this.sub1$ = this.service
      .getBookingId(this.date, this.time, this.turf)
      .pipe(
        switchMap(data => {
          this.bookId = data.booking_id
          return this.service.getPayIntent(data.booking_id)
        })
      )
      .subscribe(data => {
        this.paytIntent = data.paymentIntent
      })
  }
}
