import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild
} from '@angular/core'

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent {
  enteredOtp: string[] = ['', '', '', '']

  @ViewChild('input1') input1!: ElementRef
  @ViewChild('input2') input2!: ElementRef
  @ViewChild('input3') input3!: ElementRef
  @ViewChild('input4') input4!: ElementRef
  @Output() otpSubmit = new EventEmitter()

  verifyOTP () {
    const enteredOTP = this.enteredOtp.join('')
    this.otpSubmit.emit(enteredOTP)
  }

  buttonDisabled (): boolean {
    if (this.enteredOtp.join('').length < 4) return true
    return false
  }

  @HostListener('input', ['$event.target', '$event.data'])
  onInput (input: HTMLInputElement, inputData: string) {
    const maxLength = parseInt(input.getAttribute('maxlength') || '1')
    const nextInput = input.nextElementSibling as HTMLInputElement
    const prevInput = input.previousElementSibling as HTMLInputElement

    if (inputData === null) {
      if (prevInput) {
        prevInput.focus()
      }
    } else if (input.value.length >= maxLength && nextInput) {
      nextInput.focus()
    }
  }

  moveFocusBackward (input: HTMLInputElement, index: number): void {
    const prevInput = input.previousElementSibling as HTMLInputElement
    if (prevInput) {
      this.enteredOtp[index - 2] = ''
      prevInput.focus()
    }
  }
}
