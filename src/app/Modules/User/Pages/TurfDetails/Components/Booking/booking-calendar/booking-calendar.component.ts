import { Component, ElementRef, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { CalendarEvent } from 'angular-calendar'
import { TurfService } from 'src/app/Modules/User/Services/turf.service'
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions'

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent {
  monthNames = monthNames
  viewDate: Date = new Date()
  month = this.monthNames[this.viewDate.getMonth()]
  events: CalendarEvent[] = []
  showDay = false
  turfId!: string
  date!: Date
  bookedSlots = []
  @ViewChild('showDate') showDateRef!: ElementRef
  constructor (
    private service: TurfService,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id) this.turfId = id
    })
  }

  onDayClick ($event: any) {
    this.date = $event.day.date
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.service
      .getBookedSlots($event.day.date, this.turfId)
      .subscribe(data => {
        this.store.dispatch(setLoadingSpinner({ status: false }))

        this.showDay = true
        this.bookedSlots = data
        this.showDateRef.nativeElement.scrollIntoView({ behavior: 'smooth' })
      })
  }
  showNextMonth () {
    this.viewDate = new Date(
      this.viewDate.getFullYear(),
      this.viewDate.getMonth() + 1,
      this.viewDate.getDate()
    )
    this.month = this.monthNames[this.viewDate.getMonth()]
  }

  showPrevMonth () {
    this.viewDate = new Date(
      this.viewDate.getFullYear(),
      this.viewDate.getMonth() - 1,
      this.viewDate.getDate()
    )
    this.month = this.monthNames[this.viewDate.getMonth()]
  }

  isPrevMonth () {
    if (this.viewDate.getMonth() <= new Date().getMonth()) return false
    return true
  }
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
