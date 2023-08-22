import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { signGuard, userAuthGuard } from './Guards/user-auth.guard'
import { AllTurfsPageManagerComponent } from './Pages/AllTurf/page-manager/page-manager.component'
import { LoginComponent } from './Pages/Auth/login/login.component'
import { RegisterComponent } from './Pages/Auth/register/register.component'
import { BookingsComponent } from './Pages/bookings/bookings.component'
import { FailedComponent } from './Pages/failed/failed.component'
import { LayoutPageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component'
import { ErrorPageComponent } from './Pages/Layout/error-page/error-page.component'
import { ProfilePageManagerComponent } from './Pages/Profile/page-manager/page-manager.component'
import { SuccessComponent } from './Pages/success/success.component'
import { TurfRegisterPageManagerComponent } from './Pages/Turf-Register/page-manager/page-manager.component'
import { TurfDetailsPageManagerComponent } from './Pages/TurfDetails/page-manager/page-manager.component'
import { UserManagerComponent } from './user-manager.component'

const routes: Routes = [
  {
    path: '',
    component: UserManagerComponent,
    children: [
      { path: '', component: LayoutPageManagerComponent },
      { path: 'turfs', component: AllTurfsPageManagerComponent },
      { path: 'turf/:id', component: TurfDetailsPageManagerComponent },
      {
        path: 'profile',
        component: ProfilePageManagerComponent,
        canActivate: [userAuthGuard]
      },
      {
        path: 'bookings',
        component: BookingsComponent,
        canActivate: [userAuthGuard]
      },
      { path: 'register-turf', component: TurfRegisterPageManagerComponent },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [signGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [signGuard]
      },
      { path: 'payment-errors', component: FailedComponent },
      { path: 'success-page', component: SuccessComponent },
      { path: '**', component: ErrorPageComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
