import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  // @ViewChild('scrollDiv') div: ElementRef | undefined // Add this line

  scrollToDiv () {
    const scrollDiv = document.querySelector('#scrollDiv') // Replace with the actual ID of the div
    console.log(scrollDiv)
    if (scrollDiv) {
      scrollDiv.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
