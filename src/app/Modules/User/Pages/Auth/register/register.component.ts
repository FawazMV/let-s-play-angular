import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ManualValidators } from 'src/app/Validators/validators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      ManualValidators.cannotContainSpace
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobileNumber: new FormControl(null, [
      Validators.required,
      ManualValidators.cannotContainSpace,
      ManualValidators.numberCheck
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  })

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
      inputId: 'mobileNumber',
      inputType: 'number',
      labelName: 'Mobile Number',
      inputPlaceHolder: '+91 ****3210'
    },
    {
      inputId: 'password',
      inputType: 'password',
      labelName: 'Password',
      inputPlaceHolder: '****'
    }
  ]
  constructor () {}

  submit () {
    if (this.signupForm.valid) console.log(this.signupForm.value)
  }
}
