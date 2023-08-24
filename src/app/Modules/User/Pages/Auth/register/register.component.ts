import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import {
  setErrorMessage,
  setOtp
} from 'src/app/Modules/shared/redux/shared.actions'
import { otpSelector } from 'src/app/Modules/shared/redux/shared.selector'
import { ManualValidators } from 'src/app/Validators/validators'
import { otpConfirm, signupStart } from '../store/auth.actions'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isOtp$ = this.store.select(otpSelector)

  signupForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      ManualValidators.cannotContainSpace,
      ManualValidators.containSpecialCharacters
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobileNumber: new FormControl(null, [
      Validators.required,
      ManualValidators.cannotContainSpace,
      ManualValidators.numberCheck
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  inputBoxes = [
    {
      inputId: 'username',
      inputType: 'text',
      labelName: 'Username',
      inputPlaceHolder: 'Username'
    },
    {
      inputId: 'email',
      inputType: 'email',
      labelName: 'Email address',
      inputPlaceHolder: 'leroy@jenkins.com'
    },
    {
      inputId: 'mobileNumber',
      inputType: 'number',
      labelName: 'Mobile Number',
      inputPlaceHolder: '+91 ****3210'
    },
    {
      inputId: 'password',
      inputType: 'password',
      labelName: 'Password',
      inputPlaceHolder: '****'
    }
  ]
  constructor (private store: Store) {}

  submit () {
    this.store.dispatch(setErrorMessage({ message: '' }))
    if (this.signupForm.invalid) return

    const { email, mobileNumber } = this.signupForm.value
    this.store.dispatch(signupStart({ email, mobileNumber }))
  }

  otpSubmit (otp: number) {
    const { email, password, username, mobileNumber } = this.signupForm.value
    this.store.dispatch(
      otpConfirm({ email, password, username, mobileNumber, otp })
    )
  }
  ngOnDestroy () {
    this.store.dispatch(setOtp({ status: false }))
  }
}
