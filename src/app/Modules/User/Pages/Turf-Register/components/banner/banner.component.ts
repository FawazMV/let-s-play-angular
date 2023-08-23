import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  scrollToDiv () {
    const scrollDiv = document.querySelector('#scrollDiv')
    if (scrollDiv) {
      scrollDiv.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
