import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { BookingsData } from 'src/app/Models/app.models'
import { UserService } from '../../Services/user.service'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit, OnDestroy {
  allBookings!: BookingsData[]
  filterBookings!: BookingsData[]
  currentDate = new Date()
  isShowAll = false
  sub$!: Subscription
  constructor (private service: UserService) {}

  ngOnInit (): void {
    this.getBookings()
  }

  getBookings () {
    this.sub$ = this.service.getBookings().subscribe(data => {
      this.allBookings = data.reverse()
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
    this.sub$?.unsubscribe()
  }
}
