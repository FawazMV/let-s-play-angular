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
import { EffectsModule } from '@ngrx/effects'
import { userReducers } from './store/user.state'
import { UserAuthEffects } from './Pages/Auth/store/auth.effects'

@NgModule({
  declarations: [
    UserManagerComponent,
    NavbarComponent,
    PageManagerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(userReducers)
  ]
})
export class UserModule {}
