import { Component, ElementRef, ViewChild } from '@angular/core'
import { Features } from 'src/app/Models/app.models'
import { CommonService } from 'src/app/Services/common.service'

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent {
  searchResult: Features[] = []
  distric!: string
  location!: string
  state!: string
  @ViewChild('location') locationRef!: ElementRef

  constructor (private service: CommonService) {}
  getLocation (value: string) {
    this.service.getMapBoxlist(value).subscribe(data => {
      this.searchResult = data.features.slice(0, 6)
      console.log(this.searchResult[0]?.context)
    })
  }

  onSelect (result: Features) {
    this.locationRef.nativeElement.value = result.text
    this.location = result.text
    this.searchResult = []
    const context = result.context
    for (const x of context) {
      if (x.id.includes('district')) this.distric = x.text
      if (x.id.includes('region')) this.state = x.text
    }
  }
}
