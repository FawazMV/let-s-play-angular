import { Component, OnInit } from '@angular/core'
import { BookingsData } from 'src/app/Models/app.models'
import { UserService } from '../../Services/user.service'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  allBookings!: BookingsData[]
  filterBookings!: BookingsData[]
  currentDate = new Date()
  isShowAll = false
  constructor (private service: UserService) {}

  ngOnInit (): void {
    this.getBookings()
  }

  getBookings () {
    const sub = this.service.getBookings().subscribe(data => {
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
}
