import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { turfLoginstart } from 'src/app/Modules/User/store/turfs.actions'
import { Logindata } from '../../../../../../Models/app.models'

@Component({
  selector: 'app-turf-login',
  templateUrl: './turf-login.component.html',
  styleUrls: ['./turf-login.component.css']
})
export class TurfLoginComponent {
  constructor (private store: Store) {}

  onSubmit (data: Logindata) {
    const { email, password } = data
    this.store.dispatch(turfLoginstart({ email, password }))
  }
}
