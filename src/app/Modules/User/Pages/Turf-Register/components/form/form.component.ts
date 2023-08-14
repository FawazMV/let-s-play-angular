import { Component } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'
import { Features, MapBoxResutl } from 'src/app/Models/app.models'
import { CommonService } from 'src/app/Services/common.service'
import { ManualValidators } from 'src/app/Validators/validators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputBoxes = [
    {
      labelName: 'Court Name',
      inputId: 'courtName',
      inputType: 'text',
      inputPlaceHolder: 'Enter Court Name'
    },
    {
      labelName: 'Email Address',
      inputId: 'email',
      inputType: 'email',
      inputPlaceHolder: 'leroy@jenkins.com'
    },
    {
      labelName: 'Mobiel Number',
      inputId: 'mobile',
      inputType: 'number',
      inputPlaceHolder: '+91 ****3210'
    },
    {
      labelName: 'Password',
      inputId: 'password',
      inputType: 'password',
      inputPlaceHolder: '*****'
    }
  ]
  inputBoxes2 = [
    {
      labelName: 'Loction Details',
      inputId: 'loction_Details',
      inputType: 'text',
      inputPlaceHolder: 'Enter your loction details'
    },
    {
      labelName: 'Sports Event',
      inputId: 'event',
      inputType: 'text',
      inputPlaceHolder: 'Select Sports Type'
    }
  ]

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      ManualValidators.cannotContainSpace,
      ManualValidators.containSpecialCharacters
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobile: new FormControl(null, [
      Validators.required,
      ManualValidators.cannotContainSpace,
      ManualValidators.numberCheck
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    courtName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    event: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    loction_Details: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    images: this.fb.array([], [Validators.required])
  })
  constructor (private fb: FormBuilder) {}

  get images (): FormArray {
    return this.registerForm.get('images') as FormArray
  }

  addImage () {
    this.images.push(this.fb.control(null))
  }

  removeImage (index: number) {
    this.images.removeAt(index)
  }

  handleImageInput (event: Event) {
    const files: FileList | null = (event.target as HTMLInputElement).files

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i]
        this.images.push(this.fb.control(file)) // Add the selected files to the FormArray
        this.previewImage(file)
      }
    }
    console.log(this.registerForm)
  }

  imagePreviews: string[] = []

  private previewImage (file: File) {
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreviews.push(reader.result as string)
    }
    reader.readAsDataURL(file)
  }
}
