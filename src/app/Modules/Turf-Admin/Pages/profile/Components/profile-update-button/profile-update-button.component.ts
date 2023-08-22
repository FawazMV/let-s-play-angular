import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-profile-update-button',
  templateUrl: './profile-update-button.component.html',
  styleUrls: ['./profile-update-button.component.css']
})
export class ProfileUpdateButtonComponent {
  @Input() isEdit!: boolean
  @Output() setEdit = new EventEmitter()
  @Output() setUpdate = new EventEmitter()

  onEditClick () {
    this.setEdit.emit()
  }
  onUpdateClic () {
    this.setUpdate.emit()
  }
}
