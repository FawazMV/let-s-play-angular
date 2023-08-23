import { CanDeactivateFn } from '@angular/router'
import { TurfRegisterPageManagerComponent as Component } from '../Pages/Turf-Register/page-manager/page-manager.component'

export const formProtectGuard: CanDeactivateFn<Component> = component => {
  if (component?.formComponentRef?.registerForm.dirty) {
    const res = confirm('Are you sure want to leave, the data will be removed')
    if (res) return true
    else return false
  }
  return true
}
