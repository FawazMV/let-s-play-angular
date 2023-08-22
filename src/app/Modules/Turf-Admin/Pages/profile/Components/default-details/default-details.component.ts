import { Component, Input } from '@angular/core'
import { TurfProfileState } from 'src/app/Models/app.models'

@Component({
  selector: 'app-default-details',
  templateUrl: './default-details.component.html',
  styleUrls: ['./default-details.component.css']
})
export class DefaultDetailsComponent {
  @Input() details!: TurfProfileState
}
