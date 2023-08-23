import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { TurfBookingDetails } from 'src/app/Models/app.models'
import { getTurfBookings } from '../../redux/turf-admin.selectors'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit, OnDestroy {
  allBookings!: TurfBookingDetails[]
  filterBookings!: TurfBookingDetails[]
  currentDate = new Date()
  isShowAll = false
  sub$!: Subscription
  constructor (private store: Store) {}

  ngOnInit (): void {
    this.getBookings()
  }

  getBookings () {
    this.sub$ = this.store.select(getTurfBookings).subscribe(data => {
      const arr = [...data]
      this.allBookings = arr.reverse()
      this.filterBookings = this.filterData()
    })
  }

  showAll () {
    this.isShowAll = true
    this.filterBookings = this.allBookings
  }

  showLess () {
    this.isShowAll = false
    this.filterBookings = this.filterData()
  }

  filterData () {
    return this.allBookings.filter(x => new Date(x.bookDate) > this.currentDate)
  }

  ngOnDestroy (): void {
    this.sub$.unsubscribe()
  }
}
