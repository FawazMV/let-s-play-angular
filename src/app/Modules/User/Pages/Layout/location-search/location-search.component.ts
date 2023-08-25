import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core'
import { Subscription } from 'rxjs'
import { Features } from 'src/app/Models/app.models'
import { CommonService } from 'src/app/Services/common.service'

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnDestroy {
  searchResult: Features[] = []
  distric!: string
  location!: string
  state!: string
  sub$!: Subscription
  @ViewChild('location') locationRef!: ElementRef
  @Output() onLocSelect = new EventEmitter()
  @Output() onLocBlur = new EventEmitter()
  constructor (private service: CommonService) {}

  getLocation (value: string) {
    this.sub$ = this.service.getMapBoxlist(value).subscribe(data => {
      this.searchResult = data.features.slice(0, 6)
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
    this.onLocSelect.emit()
  }
  onBlur () {
    this.onLocBlur.emit()
  }

  ngOnDestroy (): void {
    this.sub$?.unsubscribe()
  }
}
