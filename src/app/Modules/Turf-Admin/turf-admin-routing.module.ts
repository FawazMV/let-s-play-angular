import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TurfAuthGuard } from '../User/Guards/user-auth.guard'
import { DashboardComponent } from './Pages/dashboard/dashboard.component'
import { ProfileComponent } from './Pages/profile/profile.component'
import { TurfAdminManagerComponent } from './turf-admin-manager/turf-admin-manager.component'

const routes: Routes = [
  {
    path: '',
    component: TurfAdminManagerComponent,
    canActivateChild: [TurfAuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurfAdminRoutingModule {}
