import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'auth-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() button!: string
  @Input() disabled!: boolean
  @Output() onClick = new EventEmitter()

  submit () {
    this.onClick.emit()
  }
}
