import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobileNumber: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  })
  constructor () {}

  submit () {
    console.log(this.signupForm.value)
  }

  // getErrors (input: string): string {
  //   const showUsernameErrors = () => {
  //     const usernameForm = this.signupForm?.get('username')
  //     console.log(usernameForm)
  //     if (usernameForm?.touched && !usernameForm.valid) {
  //       if (usernameForm.getError('required')) return 'username is required'
  //       if (usernameForm.getError('minlength'))
  //         return 'username length should be minimum 3 letters'
  //     }
  //     return ''
  //   }

  //   console.log(input)
  //   switch (input) {
  //     case 'email':
  //       return this.showEmailErrors()
  //     case 'password':
  //       return this.showPasswordErrors()
  //     case 'mobileNumber':
  //       return this.showMobileNumberErrors()
  //     case 'username':
  //       return showUsernameErrors()
  //     default:
  //       return 'invalid input'
  //   }
  // }

  // private showEmailErrors (): string {
  //   const emailForm = this.signupForm.get('email')
  //   if (emailForm?.touched && emailForm.invalid) {
  //     if (emailForm.getError('required')) return 'Email Id is required'
  //     if (emailForm.getError('email')) return 'Email Id is not valid'
  //   }
  //   return ''
  // }

  // private showPasswordErrors (): string {
  //   const passwordForm = this.signupForm.get('password')
  //   if (passwordForm?.touched && !passwordForm.valid) {
  //     if (passwordForm.getError('required')) return 'Password is required'
  //     if (passwordForm.getError('minlength'))
  //       return 'Password length should be minimum 3 letters'
  //   }
  //   return ''
  // }

  // private showMobileNumberErrors () {
  //   const mobileNumberForm = this.signupForm.get('mobileNumber')
  //   if (mobileNumberForm?.touched && mobileNumberForm.invalid) {
  //     if (mobileNumberForm.getError('required'))
  //       return 'Mobile nuber is required'
  //     if (
  //       mobileNumberForm.getError('minlength') ||
  //       mobileNumberForm.getError('maxlength')
  //     )
  //       return 'Mobile number is invalid'
  //   }
  //   return ''
  // }

  // showUsernameErrors () {
  //   const usernameForm = this.signupForm.get('username')
  //   if (usernameForm?.touched && !usernameForm.valid) {
  //     if (usernameForm.getError('required')) return 'username is required'
  //     if (usernameForm.getError('minlength'))
  //       return 'username length should be minimum 3 letters'
  //   }
  //   return ''
  // }
}
