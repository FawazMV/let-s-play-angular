import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UserProfile } from 'src/app/Models/app.models'
import { ManualValidators } from 'src/app/Validators/validators'

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  @Input() user!: UserProfile
  @Output() update = new EventEmitter()
  isUpdate = false
  profileForm!: FormGroup

  constructor () {}

  ngOnInit (): void {
    this.profileForm = new FormGroup({
      username: new FormControl(this.user.username, [
        Validators.required,
        Validators.minLength(3),
        ManualValidators.cannotContainSpace,
        ManualValidators.containSpecialCharacters
      ]),
      mobile: new FormControl(this.user.mobile, [
        Validators.required,
        ManualValidators.cannotContainSpace,
        ManualValidators.numberCheck
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ])
    })
    this.profileForm.disable()
  }

  profileUpdate () {
    if (this.profileForm.invalid) return
    this.update.emit(this.profileForm.value)
  }

  toEdit () {
    this.isUpdate = !this.isUpdate
    this.profileForm.enable()
  }

  inputBoxes = [
    {
      inputId: 'username',
      inputType: 'text',
      labelName: 'Username',
      inputPlaceHolder: 'Username'
    },
    {
      inputId: 'email',
      inputType: 'email',
      labelName: 'Email address',
      inputPlaceHolder: 'leroy@jenkins.com'
    },
    {
      inputId: 'mobile',
      inputType: 'number',
      labelName: 'Mobile Number',
      inputPlaceHolder: '+91 *******'
    }
  ]
}
