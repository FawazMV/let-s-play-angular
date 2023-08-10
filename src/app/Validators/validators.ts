import { AbstractControl, ValidationErrors } from '@angular/forms'

export class ManualValidators {
  static cannotContainSpace (
    control: AbstractControl
  ): ValidationErrors | null {
    if ((control.value as string)?.indexOf(' ') !== -1) {
      return {
        cannotContainSpace: { message: 'Username is not valid' }
      }
    }
    return null
  }

  static numberCheck (control: AbstractControl): ValidationErrors | null {
    if ((control.value as string)?.length !== 10) {
      return {
        numberCheck: {
          message: 'Mobile number is invalid'
        }
      }
    }
    return null
  }

  static containSpecialCharacters (
    control: AbstractControl
  ): ValidationErrors | null {
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/
    if (specialCharacterPattern.test(control.value)) {
      return {
        containSpecialCharecter: {
          message: 'Invalid input, special character included'
        }
      }
    }
    return null
  }
}
