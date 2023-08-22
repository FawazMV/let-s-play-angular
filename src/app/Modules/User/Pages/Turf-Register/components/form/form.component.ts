import { Component, ViewChild } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'
import { Store } from '@ngrx/store'
import {
  Features,
  MapBoxResutl,
  TurfRegisterDetails
} from 'src/app/Models/app.models'
import { TurfService } from 'src/app/Modules/User/Services/turf.service'
import {
  otpConfirm,
  trufOtpsend
} from 'src/app/Modules/User/store/turfs.actions'
import { CommonService } from 'src/app/Services/common.service'
import { setLoadingSpinner } from 'src/app/Modules/shared/redux/shared.actions'
import { otpSelector } from 'src/app/Modules/shared/redux/shared.selector'
import { ManualValidators as MV } from 'src/app/Validators/validators'
import { LocationSearchComponent } from '../../../Layout/location-search/location-search.component'
import { ImageInputComponent } from 'src/app/Modules/shared/Components/image-input/image-input.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputBoxes = inputBoxes
  inputBoxes2 = inputBoxes2
  locError = false
  isOtp$ = this.store.select(otpSelector)

  @ViewChild(LocationSearchComponent) locationRef!: LocationSearchComponent
  @ViewChild(ImageInputComponent) imgInpuRef!: ImageInputComponent

  constructor (
    private fb: FormBuilder,
    private store: Store,
    private service: TurfService
  ) {}

  registerForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    mobile: [
      null,
      [Validators.required, MV.cannotContainSpace, MV.numberCheck]
    ],
    password: [null, [Validators.required, Validators.minLength(3)]],
    location: [null, [Validators.required, Validators.minLength(3)]],
    courtName: [null, [Validators.required, Validators.minLength(3)]],
    event: [null, [Validators.required, Validators.minLength(3)]],
    loction_Details: [null, [Validators.required, Validators.minLength(3)]],
    images: this.fb.array([], [Validators.required])
  })

  get location () {
    return this.registerForm.get('location')
  }

  onSubmit () {
    if (this.registerForm.invalid) return
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(
      trufOtpsend({
        email: this.registerForm.value.email,
        mobile: this.registerForm.value.mobile
      })
    )
  }

  otpSubmit (otp: number) {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    const formData = new FormData()
    const values: TurfRegisterDetails = this.registerForm.value
    formData.append('email', values.email)
    formData.append('password', values.password)
    formData.append('courtName', values.courtName)
    formData.append('mobile', values.mobile)
    formData.append('event', values.event)
    formData.append('location', values.location)
    formData.append('loction_Details', values.loction_Details)
    formData.append('state', this.locationRef.state)
    formData.append('distric', this.locationRef.distric)

    const imagesArray: [] = this.registerForm.get('images')?.value
    for (const image of imagesArray) {
      formData.append('images', image)
    }

    this.store.dispatch(
      otpConfirm({ data: formData, otp: otp, mobile: values.mobile })
    )
  }

  changToFormData (values: TurfRegisterDetails) {
    const newFormData = new FormData()
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (key === 'images') {
          for (const image of this.imgInpuRef.images.controls) {
            newFormData.append('images', image.value)
          }
        }
        newFormData.append(key, (values as any)[key])
      }
    }
  }

  onLocError () {
    if (this.location?.invalid && this.locError)
      return 'Please choose your location'
    return ''
  }

  onLocBlur () {
    this.locError = true
  }

  onLocationSelect () {
    this.registerForm.get('location')?.setValue(this.locationRef.location)
  }
}

const inputBoxes = [
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
const inputBoxes2 = [
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
  // {
  //   labelName: 'Turf Images',
  //   inputId: 'images',
  //   inputType: 'file',
  //   inputPlaceHolder: 'Select Images of your Turf'
  // }
]

// registerForm: FormGroup = new FormGroup({
//   username: new FormControl(null, [
//     Validators.required,
//     Validators.minLength(3),
//     ManualValidators.cannotContainSpace,
//     ManualValidators.containSpecialCharacters
//   ]),
//   email: new FormControl(null, [Validators.required, Validators.email]),
//   mobile: new FormControl(null, [
//     Validators.required,
//     ManualValidators.cannotContainSpace,
//     ManualValidators.numberCheck
//   ]),
//   password: new FormControl(null, [
//     Validators.required,
//     Validators.minLength(3)
//   ]),
//   courtName: new FormControl(null, [
//     Validators.required,
//     Validators.minLength(3)
//   ]),
//   event: new FormControl(null, [
//     Validators.required,
//     Validators.minLength(3)
//   ]),
//   loction_Details: new FormControl(null, [
//     Validators.required,
//     Validators.minLength(3)
//   ]),
//   images: this.fb.array([], [Validators.required])
// })
//   constructor (private fb: FormBuilder) {}

//   get images (): FormArray {
//     return this.registerForm.get('images') as FormArray
//   }

//   addImage () {
//     this.images.push(this.fb.control(null))
//   }

//   removeImage (index: number) {
//     this.images.removeAt(index)
//   }

//   handleImageInput (event: Event) {
//     const files: FileList | null = (event.target as HTMLInputElement).files

//     if (files && files.length > 0) {
//       for (let i = 0; i < files.length; i++) {
//         const file: File = files[i]
//         this.images.push(this.fb.control(file)) // Add the selected files to the FormArray
//         this.previewImage(file)
//       }
//     }
//     console.log(this.registerForm)
//   }

//   imagePreviews: string[] = []

//   private previewImage (file: File) {
//     const reader = new FileReader()
//     reader.onload = () => {
//       this.imagePreviews.push(reader.result as string)
//     }
//     reader.readAsDataURL(file)
//   }
// }
