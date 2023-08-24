import { Component, ViewChild } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { TurfRegisterDetails } from 'src/app/Models/app.models'
import { TurfService } from 'src/app/Modules/User/Services/turf.service'
import {
  otpConfirm,
  trufOtpsend
} from 'src/app/Modules/User/store/turfs.actions'
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
    this.store.dispatch(
      trufOtpsend({
        email: this.registerForm.value.email,
        mobile: this.registerForm.value.mobile
      })
    )
  }

  otpSubmit (otp: number) {
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
]
