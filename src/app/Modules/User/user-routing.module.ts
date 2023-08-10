import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoggeInAuthGuard } from './Guards/loggedIn.guard'
import { LoginComponent } from './Pages/Auth/login/login.component'
import { RegisterComponent } from './Pages/Auth/register/register.component'
import { PageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component'
import { UserManagerComponent } from './user-manager.component'

const routes: Routes = [
  {
    path: '',
    component: UserManagerComponent,
    children: [
      { path: '', component: PageManagerComponent },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggeInAuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoggeInAuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
