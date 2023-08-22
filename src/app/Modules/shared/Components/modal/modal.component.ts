import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { setModal } from 'src/app/Modules/shared/redux/shared.actions'
import { modalMessageSelector } from 'src/app/Modules/shared/redux/shared.selector'

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
