import { Component, Input } from '@angular/core'
import { images } from 'src/app/Models/app.models'

@Component({
  selector: 'app-photo-manage',
  templateUrl: './photo-manage.component.html',
  styleUrls: ['./photo-manage.component.css']
})
export class PhotoManageComponent {
  @Input() images!: images[]
  index = 0

  getNextImage () {
    this.index = (this.index + 1) % this.images.length
  }

  getPrevImage () {
    if (this.index === 0) this.index = this.images.length
    else this.index = this.index - 1
  }
}
