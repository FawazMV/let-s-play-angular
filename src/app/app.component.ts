import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { fetchAllTurfs } from './Modules/User/store/turfs.actions'
import {
  errorMessageSelector,
  getLoading,
  modalMessageSelector
} from './store/shared/shared.selector'

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
  constructor (private store: Store) {}

  ngOnInit (): void {
    this.store.dispatch(fetchAllTurfs())
  }
}
