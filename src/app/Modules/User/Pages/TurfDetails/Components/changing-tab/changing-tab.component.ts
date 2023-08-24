import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-changing-tab',
  templateUrl: './changing-tab.component.html',
  styleUrls: ['./changing-tab.component.css']
})
export class ChangingTabComponent {
  activeTab: string = 'booking'

  handleTabClick (tab: string) {
    this.activeTab = tab
  }
}
