import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InputBoxComponent } from './Components/input-box/input-box.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { OtpPageComponent } from './Components/otp-page/otp-page.component'
import { ButtonComponent } from './Components/button/button.component'
import { LoaderComponent } from './Components/loader/loader.component'
import { ErrorMessageComponent } from './Components/error-message/error-message.component'
import { ModalComponent } from './Components/modal/modal.component'
import { ImageInputComponent } from './Components/image-input/image-input.component'

@NgModule({
  declarations: [
    InputBoxComponent,
    OtpPageComponent,
    ButtonComponent,
    LoaderComponent,
    ErrorMessageComponent,
    ModalComponent,
    ImageInputComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputBoxComponent,
    OtpPageComponent,
    ButtonComponent,
    LoaderComponent,
    ErrorMessageComponent,
    ModalComponent,
    ImageInputComponent
  ]
})
export class SharedModule {}
