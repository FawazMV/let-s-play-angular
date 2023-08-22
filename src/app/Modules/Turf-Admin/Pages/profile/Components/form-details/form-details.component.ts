import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TurfProfileState } from 'src/app/Models/app.models'
import { ImageInputComponent } from 'src/app/Modules/shared/Components/image-input/image-input.component'
import { ManualValidators as MV } from 'src/app/Validators/validators'

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  form!: FormGroup
  @Input() details!: TurfProfileState
  // @ViewChild(ImageInputComponent) imgInpuRef!: ImageInputComponent

  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {
    this.form = this.fb.group({
      courtName: [
        this.details.courtName,
        [Validators.required, Validators.minLength(3)]
      ],
      enquiryNumber: [
        this.details.enquiryNumber,
        [Validators.required, MV.numberCheck, MV.cannotContainSpace]
      ],
      Price: [this.details.Price, Validators.required],
      Holiday: [
        this.details.Holiday,
        [Validators.required, MV.cannotContainSpace]
      ],
      loction_Details: [this.details.loction_Details, Validators.required],
      openingTime: [this.details.openingTime, Validators.required],
      closingTime: [this.details.closingTime, Validators.required],
      images: this.fb.array([], [])
    })
    this.form.disable()
  }
}
