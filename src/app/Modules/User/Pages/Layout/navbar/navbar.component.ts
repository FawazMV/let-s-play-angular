import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false
  menus = [
    { name: 'HOME', link: '/' },
    { name: 'TURF BOOKING', link: '/turfs' },
    { name: 'TURF REGISTRATION', link: '/register-turf' },
    { name: 'CONTACT', link: '/contact-us' }
  ]

  toggleMenu (): void {
    this.isOpen = !this.isOpen
  }
}
