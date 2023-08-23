import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-profile-update-button',
  templateUrl: './profile-update-button.component.html',
  styleUrls: ['./profile-update-button.component.css']
})
export class ProfileUpdateButtonComponent {
  @Input() isEdit!: boolean
  @Output() setEdit = new EventEmitter<boolean>()
  @Output() setUpdate = new EventEmitter<boolean>()

  onEditClick () {
    this.setEdit.emit(this.isEdit)
  }
  onUpdateClic () {
    this.setUpdate.emit(this.isEdit)
  }
}
