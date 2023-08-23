import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { getUserToken } from '../../Auth/store/auth.selectors'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin$ = this.store.select(getUserToken)
  isOpen = false
  path = this.router.url
  sub!: Subscription
  menus = [
    { name: 'HOME', link: '/' },
    { name: 'TURF BOOKING', link: '/turfs' },
    { name: 'TURF REGISTRATION', link: '/register-turf' }
  ]

  constructor (private store: Store, private router: Router) {}

  toggleMenu (): void {
    this.isOpen = !this.isOpen
  }
}
