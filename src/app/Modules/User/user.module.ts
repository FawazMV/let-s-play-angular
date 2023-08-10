import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { UserManagerComponent } from './user-manager.component'
import { NavbarComponent } from './Pages/Layout/navbar/navbar.component'
import { PageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component'
import { LoginComponent } from './Pages/Auth/login/login.component'
import { RegisterComponent } from './Pages/Auth/register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputBoxComponent } from './Pages/Layout/input-box/input-box.component'
import { ButtonComponent } from './Pages/Auth/components/button/button.component'
import { OtpPageComponent } from 'src/app/Components/otp-page/otp-page.component'
import { LandigButtonComponent } from './Pages/LandingPage/components/button/button.component'

@NgModule({
  declarations: [
    UserManagerComponent,
    NavbarComponent,
    PageManagerComponent,
    LoginComponent,
    RegisterComponent,
    InputBoxComponent,
    ButtonComponent,
    LandigButtonComponent,
    OtpPageComponent
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, FormsModule]
})
export class UserModule {}
