import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { setModal } from 'src/app/store/shared/shared.actions'
import { modalMessageSelector } from 'src/app/store/shared/shared.selector'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  message$ = this.store.select(modalMessageSelector)

  constructor (private store: Store) {}

  closeModal () {
    this.store.dispatch(setModal({ message: '' }))
  }
}
