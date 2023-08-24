import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { TurfAdminService } from 'src/app/Modules/Turf-Admin/Services/turf-admin.service'

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit, OnDestroy {
  constructor (private service: TurfAdminService) {}
  today: number = 0
  total: number = 0
  sub$!: Subscription
  ngOnInit (): void {
    this.sub$ = this.service.getBookingCount().subscribe(data => {
      this.today = data.today
      this.total = data.total
    })
  }

  ngOnDestroy (): void {
    this.sub$.unsubscribe()
  }
}
