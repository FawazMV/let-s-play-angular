import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoggeInAuthGuard } from './Guards/loggedIn.guard'
import { AllTurfsPageManagerComponent } from './Pages/AllTurf/page-manager/page-manager.component'
import { LoginComponent } from './Pages/Auth/login/login.component'
import { RegisterComponent } from './Pages/Auth/register/register.component'
import { LayoutPageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component'
import { ErrorPageComponent } from './Pages/Layout/error-page/error-page.component'
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
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggeInAuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoggeInAuthGuard]
      },
      { path: '**', component: ErrorPageComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
