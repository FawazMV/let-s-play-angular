import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserModule } from './Modules/User/user.module';
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
