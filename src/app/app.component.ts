import { Component, OnInit, ViewChild } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  fetchAllTurfs,
  turfAutoLogin
} from './Modules/User/store/turfs.actions'

import {
  errorMessageSelector,
  getLoading,
  modalMessageSelector
} from './Modules/shared/redux/shared.selector'
import { autoLogin } from './Modules/User/Pages/Auth/store/auth.actions'
import { Subject } from 'rxjs'
import { LoaderService } from './Services/loader.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'let-s-play'
  // showLoading = this.store.select(getLoading)

  showModal = this.store.select(modalMessageSelector)
  errorMessage$ = this.store.select(errorMessageSelector)
  showLoading: Subject<boolean> = this.service.isLoading
  constructor (private store: Store, private service: LoaderService) {}

  ngOnInit (): void {
    this.store.dispatch(turfAutoLogin())
    this.store.dispatch(fetchAllTurfs())
    this.store.dispatch(autoLogin())
  }
}
