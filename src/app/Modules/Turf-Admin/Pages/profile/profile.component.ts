import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Store } from '@ngrx/store'
import { getTurfProfile } from '../../redux/turf-admin.selectors'
import { FormDetailsComponent } from './Components/form-details/form-details.component'
import {
  TurfProfileState,
  TurfProfileUpdateState
} from '../../../../Models/app.models'
import { Subscription } from 'rxjs'
import { updateTurfProfile } from '../../redux/turf-admin.actions'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  isEdit = false
  profile!: TurfProfileState
  sub!: Subscription
  @ViewChild(FormDetailsComponent) formRef!: FormDetailsComponent

  constructor (private store: Store) {}

  ngOnInit (): void {
    this.sub = this.store.select(getTurfProfile).subscribe(data => {
      this.profile = data
    })
  }

  setEdit (state: boolean) {
    this.isEdit = !state
    this.formRef.form.enable()
  }

  setUpdate (state: boolean) {
    if (this.formRef.form.valid) {
      this.isEdit = !state
      this.formRef.form.disable()
      this.store.dispatch(updateTurfProfile({ data: this.formRef.form.value }))
    } else alert('Please fill the details properly')
  }

  updatefn () {
    const formData = new FormData()
    const values: TurfProfileUpdateState = this.formRef.form.value
    formData.append('Holiday', values.Holiday)
    formData.append('courtName', values.courtName)
    formData.append('Price', values.Price)
    formData.append('enquiryNumber', values.enquiryNumber)
    formData.append('closingTime', values.closingTime)
    formData.append('openingTime', values.openingTime)
    formData.append('loction_Details', values.loction_Details)

    const imagesArray: [] = this.formRef.form.get('images')?.value
    if (imagesArray.length) {
      for (const image of imagesArray) {
        formData.append('images', image)
      }
    }
    return formData
  }

  ngOnDestroy (): void {
    this.sub.unsubscribe()
  }
}
