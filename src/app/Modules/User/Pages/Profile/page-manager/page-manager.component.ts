import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { UserProfile, UserProfileUpdateData } from 'src/app/Models/app.models'
import { UserService } from '../../../Services/user.service'
import { ProfileDetailsComponent } from '../components/profile-details/profile-details.component'

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.css']
})
export class ProfilePageManagerComponent implements OnInit, OnDestroy {
  user!: UserProfile
  sub1$!: Subscription
  sub2$!: Subscription
  @ViewChild(ProfileDetailsComponent) profDet!: ProfileDetailsComponent
  constructor (private service: UserService, private store: Store) {}

  ngOnInit () {
    this.fetchProfileDetails()
  }

  fetchProfileDetails () {
    this.sub1$ = this.service.getProfileDetails().subscribe(data => {
      this.user = data
    })
  }

  profileUpdate (values: UserProfileUpdateData) {
    this.sub2$ = this.service.updateProfile(values).subscribe(() => {
      if (this.profDet) {
        this.profDet.isUpdate = !this.profDet.isUpdate
        this.profDet.profileForm.enable()
      }
    })
  }

  ngOnDestroy (): void {
    this.sub1$?.unsubscribe()
    this.sub2$?.unsubscribe()
  }
}
