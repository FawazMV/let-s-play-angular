import { Component, inject } from '@angular/core'
import { Store } from '@ngrx/store'
import { turfLogOutAction } from 'src/app/Modules/User/store/turfs.actions'

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

  store = inject(Store)

  toggleMenu (): void {
    this.isOpen = !this.isOpen
  }

  logOut () {
    const res = confirm('Are you sure?')
    if (res) this.store.dispatch(turfLogOutAction())
  }
}
