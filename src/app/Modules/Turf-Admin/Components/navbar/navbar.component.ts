import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false
  Menus = [
    {
      link: '/turf-admin',
      text: 'Dashboard'
    },
    {
      link: 'profile',
      text: 'Profile'
    },
    {
      link: 'bookings',
      text: 'Bookings'
    }
  ]

  toggleMenu (): void {
    this.isOpen = !this.isOpen
  }
}
