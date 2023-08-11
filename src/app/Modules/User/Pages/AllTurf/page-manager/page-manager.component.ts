import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { getAllTurfs } from '../../../store/turf.selectors'

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.css']
})
export class AllTurfsPageManagerComponent {
  turfs$ = this.store.select(getAllTurfs)

  constructor (private store: Store) {}
}
