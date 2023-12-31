import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  fetchGraphData,
  fetchTurfBookings,
  fetchTurfProfile
} from '../redux/turf-admin.actions'

@Component({
  selector: 'app-turf-admin-manager',
  templateUrl: './turf-admin-manager.component.html',
  styleUrls: ['./turf-admin-manager.component.css']
})
export class TurfAdminManagerComponent implements OnInit {
  constructor (private store: Store) {}

  ngOnInit (): void {
    this.store.dispatch(fetchGraphData())
    this.store.dispatch(fetchTurfProfile())
    this.store.dispatch(fetchTurfBookings())
  }
}
