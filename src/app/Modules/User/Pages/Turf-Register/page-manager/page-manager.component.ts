import { Component, ElementRef, ViewChild } from '@angular/core'
import { FormComponent } from '../components/form/form.component'

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.css']
})
export class TurfRegisterPageManagerComponent {
  @ViewChild(FormComponent) formComponentRef!: FormComponent
}
