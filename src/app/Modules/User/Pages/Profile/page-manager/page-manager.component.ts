import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Store } from '@ngrx/store'
import { UserProfile, UserProfileUpdateData } from 'src/app/Models/app.models'
import { setLoadingSpinner } from 'src/app/Modules/shared/redux/shared.actions'
import { UserService } from '../../../Services/user.service'
import { ProfileDetailsComponent } from '../components/profile-details/profile-details.component'

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.css']
})
export class ProfilePageManagerComponent implements OnInit {
  user!: UserProfile
  @ViewChild(ProfileDetailsComponent) profDet!: ProfileDetailsComponent
  constructor (private service: UserService, private store: Store) {}

  ngOnInit () {
    this.fetchProfileDetails()
  }

  fetchProfileDetails () {
    this.service.getProfileDetails().subscribe(data => {
      this.user = data
    })
  }

  profileUpdate (values: UserProfileUpdateData) {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.service.updateProfile(values).subscribe(() => {
      if (this.profDet) {
        this.profDet.isUpdate = !this.profDet.isUpdate
        this.profDet.profileForm.enable()
        this.store.dispatch(setLoadingSpinner({ status: false }))
      }
    })
  }
}
