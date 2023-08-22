import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Logindata } from 'src/app/Models/app.models'
import { loginStart } from '../../store/auth.actions'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor (private store: Store) {}

  onSubmit (data: Logindata) {
    const { email, password } = data
    this.store.dispatch(loginStart({ email, password }))
  }
}
