import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import {
  setErrorMessage,
  setLoadingSpinner
} from 'src/app/store/shared/shared.actions'
import { loginStart } from '../store/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private store: Store) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  inputBoxes = [
    {
      inputId: 'email',
      inputType: 'email',
      labelName: 'Email address',
      inputPlaceHolder: 'leroy@jenkins.com'
    },
    {
      inputId: 'password',
      inputType: 'password',
      labelName: 'Password',
      inputPlaceHolder: '****'
    }
  ]

  onSubmit () {
    this.store.dispatch(setErrorMessage({ message: '' }))
    if (this.loginForm.invalid) return
    const { email, password } = this.loginForm.value
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(loginStart({ email, password }))
  }

  ngOnDestroy () {
    this.store.dispatch(setErrorMessage({ message: '' }))
  }
}
