import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'mobile'
})
export class MobilePipe implements PipeTransform {
  transform (value: string): string {
    return '+91' + value
  }
}
