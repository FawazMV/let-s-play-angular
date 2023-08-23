import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { getSingleTurf } from 'src/app/Modules/User/store/turf.selectors'
import { setLoadingSpinner } from 'src/app/Modules/shared/redux/shared.actions'

@Component({
  selector: 'app-day-show',
  templateUrl: './day-show.component.html',
  styleUrls: ['./day-show.component.css']
})
export class DayShowComponent implements OnInit {
  @Input('data') timeSlots!: any[]
  @Input('id') turfId!: string
  @Input('date') date!: Date
  slots: any[] = []
  startTime!: string
  endTime!: string
  price!: number
  payment: boolean = false
  bookTime!: string
  constructor (private store: Store) {}

  ngOnInit () {
    this.getTurfDetails()
  }

  getTurfDetails () {
    this.store
      .select(getSingleTurf(this.turfId))
      .subscribe(data => {
        if (data) {
          this.startTime = data.openingTime
          this.endTime = data.closingTime
          this.price = data.Price
          this.slots = this.getTimeSlots()
        }
      })
      .unsubscribe()
  }

  toPayment (time: string) {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.bookTime = time
    this.payment = true
  }

  getTimeSlots () {
    const timeSlots = []
    const gap = 60
    const startDate = new Date(`2000-01-01T${this.startTime}:00`)
    const endDate = new Date(`2000-01-01T${this.endTime}:00`)
    const duration = +endDate - +startDate
    const numSlots = Math.floor(duration / (gap * 60 * 1000))
    for (let i = 0; i < numSlots; i++) {
      const slotTime = new Date(startDate.getTime() + i * gap * 60 * 1000)
      let time = slotTime.toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
      })
      if (time.split(':')[0].length === 1) time = '0' + time
      if (!this.timeSlots.find(x => x.time === time)) timeSlots.push(time)
    }
    return timeSlots
  }
}
