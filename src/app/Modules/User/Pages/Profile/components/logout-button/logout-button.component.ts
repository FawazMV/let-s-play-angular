import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { logOutAction } from '../../../Auth/store/auth.actions'

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {
  constructor (private store: Store) {}
  logout () {
    const res = confirm('Are you sure you want to log out?')
    if (res) this.store.dispatch(logOutAction())
  }
}
