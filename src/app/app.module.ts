import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserModule } from './Modules/User/user.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { appReducer } from './store/app.state'
import { UserAuthEffects } from './Modules/User/Pages/Auth/store/auth.effects'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TurfEffects } from './Modules/User/store/turfs.effects'
import { SharedModule } from './Modules/shared/shared.module'
import { LoaderInterceptor } from './interceptors/loader.interceptor'
// import { provideNgxStripe } from 'ngx-stripe'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    SharedModule,
    EffectsModule.forRoot([UserAuthEffects, TurfEffects]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
