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
    // {
    //   link: '/turf-admin/earning-report',
    //   text: 'Earning Reports'
    // }
  ]

  constructor (private store: Store) {}

  toggleMenu (): void {
    // this.isLogin$.subscribe(data => {
    //   console.log(data)
    this.isOpen = !this.isOpen
    // })
  }
}
