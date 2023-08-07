import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { UserManagerComponent } from './user-manager.component'
import { NavbarComponent } from './Pages/Layout/navbar/navbar.component';
import { PageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { RegisterComponent } from './Pages/Auth/register/register.component'

@NgModule({
  declarations: [UserManagerComponent, NavbarComponent, PageManagerComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
