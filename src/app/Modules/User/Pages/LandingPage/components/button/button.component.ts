import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class LandigButtonComponent {
  @Input() color!: string
  @Input() text!: string
  @Input() route!: string
}
