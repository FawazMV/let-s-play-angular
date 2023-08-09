import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { UserManagerComponent } from './user-manager.component'
import { NavbarComponent } from './Pages/Layout/navbar/navbar.component'
import { PageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component'
import { LoginComponent } from './Pages/Auth/login/login.component'
import { RegisterComponent } from './Pages/Auth/register/register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { userReducers } from './store/user.state'
import { InputBoxComponent } from './Pages/Layout/input-box/input-box.component'
import { ButtonComponent } from './Pages/Auth/button/button.component'

@NgModule({
  declarations: [
    UserManagerComponent,
    NavbarComponent,
    PageManagerComponent,
    LoginComponent,
    RegisterComponent,
    InputBoxComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(userReducers)
  ]
})
export class UserModule {}
