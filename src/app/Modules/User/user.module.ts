import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { UserManagerComponent } from './user-manager.component'
import { NavbarComponent } from './Pages/Layout/navbar/navbar.component'
import { LayoutPageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component'
import { LoginComponent } from './Pages/Auth/login/login.component'
import { RegisterComponent } from './Pages/Auth/register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputBoxComponent } from './Pages/Layout/input-box/input-box.component'
import { ButtonComponent } from './Pages/Auth/components/button/button.component'
import { OtpPageComponent } from 'src/app/Components/otp-page/otp-page.component'
import { LandigButtonComponent } from './Pages/LandingPage/components/button/button.component'
import { AllTurfsPageManagerComponent } from './Pages/AllTurf/page-manager/page-manager.component'
import { TurfShimmerComponent } from './Pages/AllTurf/components/turf-shimmer/turf-shimmer.component'
import { TurfCardComponent } from './Pages/AllTurf/components/turf-card/turf-card.component'
import { TurfDetailsPageManagerComponent } from './Pages/TurfDetails/page-manager/page-manager.component'
import { ErrorPageComponent } from './Pages/Layout/error-page/error-page.component'
import { PhotoManageComponent } from './Pages/TurfDetails/Components/photo-manage/photo-manage.component'
import { ChangingTabComponent } from './Pages/TurfDetails/Components/changing-tab/changing-tab.component'
import { BookingCalendarComponent } from './Pages/TurfDetails/Components/Booking/booking-calendar/booking-calendar.component'
import { ProfilePageManagerComponent } from './Pages/Profile/page-manager/page-manager.component'
import { ProfilePictureComponent } from './Pages/Profile/components/profile-picture/profile-picture.component'
import { ProfileDetailsComponent } from './Pages/Profile/components/profile-details/profile-details.component'
import { PasswordUpdateComponent } from './Pages/Profile/components/password-update/password-update.component'
import { LogoutButtonComponent } from './Pages/Profile/components/logout-button/logout-button.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from 'src/app/interceptors/user.inteceptor'
import { TurfRegisterPageManagerComponent } from './Pages/Turf-Register/page-manager/page-manager.component'
import { BannerComponent } from './Pages/Turf-Register/components/banner/banner.component'
import { ContentComponent } from './Pages/Turf-Register/components/content/content.component'
import { FormComponent } from './Pages/Turf-Register/components/form/form.component'
import { ContactInfoComponent } from './Pages/Turf-Register/components/contact-info/contact-info.component'
import { LocationSearchComponent } from './Pages/Layout/location-search/location-search.component'
import { ImageInputComponent } from './Pages/Turf-Register/components/image-input/image-input.component'
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { DayShowComponent } from './Pages/TurfDetails/Components/Booking/day-show/day-show.component'
import { PaymentComponent } from './Pages/TurfDetails/Components/Booking/payment/payment.component'
import { NgxStripeModule } from 'ngx-stripe'
import { environment } from 'src/app/environments/environments'
import { FailedComponent } from './Pages/failed/failed.component'
import { SuccessComponent } from './Pages/success/success.component';
import { BookingsComponent } from './Pages/bookings/bookings.component'

@NgModule({
  declarations: [
    UserManagerComponent,
    NavbarComponent,
    LayoutPageManagerComponent,
    LoginComponent,
    RegisterComponent,
    InputBoxComponent,
    ButtonComponent,
    LandigButtonComponent,
    OtpPageComponent,
    AllTurfsPageManagerComponent,
    TurfShimmerComponent,
    TurfCardComponent,
    TurfDetailsPageManagerComponent,
    ErrorPageComponent,
    PhotoManageComponent,
    ChangingTabComponent,
    BookingCalendarComponent,
    ProfilePageManagerComponent,
    ProfilePictureComponent,
    ProfileDetailsComponent,
    PasswordUpdateComponent,
    LogoutButtonComponent,
    TurfRegisterPageManagerComponent,
    BannerComponent,
    ContentComponent,
    FormComponent,
    ContactInfoComponent,
    LocationSearchComponent,
    ImageInputComponent,
    DayShowComponent,
    PaymentComponent,
    FailedComponent,
    SuccessComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxStripeModule.forRoot(environment.config.stripe.publicKey)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class UserModule {}
