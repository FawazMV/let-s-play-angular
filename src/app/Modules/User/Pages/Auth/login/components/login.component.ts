import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Logindata } from 'src/app/Models/app.models'
import {
  setErrorMessage,
  setLoadingSpinner
} from 'src/app/Modules/shared/redux/shared.actions'
import { loginStart } from '../../store/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  constructor (private store: Store) {}

  @Output() submit: EventEmitter<Logindata> = new EventEmitter()

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
    this.submit.emit({ email, password })
  }

  ngOnDestroy () {
    this.store.dispatch(setErrorMessage({ message: '' }))
    this.submit.unsubscribe()
  }
}
