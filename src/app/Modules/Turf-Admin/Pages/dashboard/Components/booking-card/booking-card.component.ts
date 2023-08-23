import { Component, OnInit } from '@angular/core'
import { TurfAdminService } from 'src/app/Modules/Turf-Admin/Services/turf-admin.service'

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {
  constructor (private service: TurfAdminService) {}
  today: number = 0
  total: number = 0
  ngOnInit (): void {
    this.service.getBookingCount().subscribe(data => {
      this.today = data.today
      this.total = data.total
    })
  }
}
