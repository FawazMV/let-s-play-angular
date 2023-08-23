import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TurfAdminRoutingModule } from './turf-admin-routing.module'
import { TurfAdminManagerComponent } from './turf-admin-manager/turf-admin-manager.component'
import { ProfileComponent } from './Pages/profile/profile.component'
import { DashboardComponent } from './Pages/dashboard/dashboard.component'
import { BookingsComponent } from './Pages/bookings/bookings.component'
import { NavbarComponent } from './Components/navbar/navbar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormDetailsComponent } from './Pages/profile/Components/form-details/form-details.component'
import { SharedModule } from '../shared/shared.module'
import { DefaultDetailsComponent } from './Pages/profile/Components/default-details/default-details.component'
import { ProfileUpdateButtonComponent } from './Pages/profile/Components/profile-update-button/profile-update-button.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TurfInterceptor } from 'src/app/interceptors/turf.interceptor'
import { StoreModule } from '@ngrx/store'
import { TURF_STATE } from './redux/turf-admin.state'
import { TurfAdminReducer } from './redux/turf-admin.reducers'
import { EffectsModule } from '@ngrx/effects'
import { TurfAdminEffects } from './redux/turf-admin.effects'
import { TurfAdminService } from './Services/turf-admin.service'
import { NgApexchartsModule } from 'ng-apexcharts'
import { GraphComponent } from './Pages/dashboard/Components/graph/graph.component'
import { BookingCardComponent } from './Pages/dashboard/Components/booking-card/booking-card.component'

@NgModule({
  declarations: [
    TurfAdminManagerComponent,
    ProfileComponent,
    DashboardComponent,
    BookingsComponent,
    NavbarComponent,
    FormDetailsComponent,
    DefaultDetailsComponent,
    ProfileUpdateButtonComponent,
    GraphComponent,
    BookingCardComponent
  ],
  imports: [
    CommonModule,
    TurfAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(TURF_STATE, TurfAdminReducer),
    EffectsModule.forFeature([TurfAdminEffects]),
    NgApexchartsModule
  ],
  providers: [
    TurfAdminService,
    { provide: HTTP_INTERCEPTORS, useClass: TurfInterceptor, multi: true }
  ]
})
export class TurfAdminModule {}
