import { Component, OnInit, ViewChild } from '@angular/core'
import { Store } from '@ngrx/store'
import { fetchAllTurfs } from './Modules/User/store/turfs.actions'
import { StripeCardNumberComponent } from 'ngx-stripe'
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  PaymentIntent
} from '@stripe/stripe-js'

import {
  errorMessageSelector,
  getLoading,
  modalMessageSelector
} from './store/shared/shared.selector'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { StripeService } from './stripe.service'
import { Observable, switchMap } from 'rxjs'
import { environment } from './environments/environments'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'let-s-play'
  showLoading = this.store.select(getLoading)
  showModal = this.store.select(modalMessageSelector)
  errorMessage$ = this.store.select(errorMessageSelector)
  constructor (
    private store: Store,
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}

  ngOnInit (): void {
    this.store.dispatch(fetchAllTurfs())
  }

  @ViewChild(StripeCardNumberComponent) card!: StripeCardNumberComponent

  public cardOptions: StripeCardElementOptions = {
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

  paymentForm: FormGroup = this.fb.group({
    amount: [100, [Validators.required, Validators.pattern(/d+/)]]
  })

  get amount (): number {
    const val = this.paymentForm.get('amount')?.value
    if (val) return val
    return 0
  }

  get name (): string {
    const val = this.paymentForm.get('name')?.value
    if (val) return val
    return 'user'
  }

  pay (): void {
    if (this.paymentForm.valid) {
      this.createPaymentIntent(this.amount)
        .pipe(
          switchMap(pi =>
            this.stripeService.confirmCardPayment(pi.client_secret, {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.name
                }
              }
            })
          )
        )
        .subscribe((result: any) => {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message)
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
            }
          }
        })
    } else {
      console.log(this.paymentForm)
    }
  }

  createPaymentIntent (amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${environment.config.userApi}/create-payment-intent`,
      { amount }
    )
  }
}
