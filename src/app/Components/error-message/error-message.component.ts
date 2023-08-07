import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { setErrorMessage } from 'src/app/store/shared/shared.actions'

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() errorMessage!: string

  constructor (private store: Store) {}
  removeError () {
    this.store.dispatch(setErrorMessage({ message: '' }))
  }
}
