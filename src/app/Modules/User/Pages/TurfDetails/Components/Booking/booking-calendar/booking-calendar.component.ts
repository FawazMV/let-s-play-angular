import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CalendarEvent } from 'angular-calendar'
import { Subscription } from 'rxjs'
import { TurfService } from 'src/app/Modules/User/Services/turf.service'

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit, OnDestroy {
  monthNames = monthNames
  viewDate: Date = new Date()
  month = this.monthNames[this.viewDate.getMonth()]
  events: CalendarEvent[] = []
  showDay = false
  turfId!: string
  date!: Date
  bookedSlots = []
  sub1$!: Subscription
  sub2$!: Subscription

  @ViewChild('showDate') showDateRef!: ElementRef
  constructor (private service: TurfService, private route: ActivatedRoute) {}

  ngOnInit () {
    this.sub1$ = this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id) this.turfId = id
    })
  }

  onDayClick ($event: any) {
    this.date = $event.day.date
    this.sub2$ = this.service
      .getBookedSlots($event.day.date, this.turfId)
      .subscribe(data => {
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
  ngOnDestroy (): void {
    this.sub1$.unsubscribe()
    this.sub2$.unsubscribe()
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
