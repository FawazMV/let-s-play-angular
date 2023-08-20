import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { autoLogin } from './Pages/Auth/store/auth.actions'

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  constructor (private store: Store) {}

  ngOnInit (): void {
    this.store.dispatch(autoLogin())
  }
}
