import { Component, Input } from '@angular/core'
import { Turf } from 'src/app/Models/app.models'

@Component({
  selector: 'app-turf-card',
  templateUrl: './turf-card.component.html',
  styleUrls: ['./turf-card.component.css']
})
export class TurfCardComponent {
  @Input() turf!: Turf
}
