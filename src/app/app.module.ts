import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserModule } from './Modules/User/user.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule } from '@angular/common/http'
import { LoaderComponent } from './Components/loader/loader.component'
import { ModalComponent } from './Components/modal/modal.component'
import { ErrorMessageComponent } from './Components/error-message/error-message.component'
import { appReducer } from './store/app.state'
import { UserAuthEffects } from './Modules/User/Pages/Auth/store/auth.effects'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TurfEffects } from './Modules/User/store/turfs.effects'
import { NgxStripeModule } from 'ngx-stripe'
// import { provideNgxStripe } from 'ngx-stripe'

import { environment } from './environments/environments'
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ModalComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserAuthEffects, TurfEffects]),
    ReactiveFormsModule,
    FormsModule,
    NgxStripeModule.forRoot(environment.config.stripe.publicKey)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
