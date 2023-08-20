import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { getUserToken } from '../../Auth/store/auth.selectors'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin$ = this.store.select(getUserToken)
  isOpen = false
  menus = [
    { name: 'HOME', link: '/' },
    { name: 'TURF BOOKING', link: '/turfs' },
    { name: 'TURF REGISTRATION', link: '/register-turf' },
    { name: 'CONTACT', link: '/contact-us' }
  ]

  constructor (private store: Store) {}

  toggleMenu (): void {
    this.isLogin$.subscribe(data => {
      console.log(data)
      this.isOpen = !this.isOpen
    })
  }
}
