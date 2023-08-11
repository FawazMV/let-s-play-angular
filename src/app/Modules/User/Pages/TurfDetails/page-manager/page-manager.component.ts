import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Turf } from 'src/app/Models/app.models'
import { getSingleTurf } from '../../../store/turf.selectors'

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.css']
})
export class TurfDetailsPageManagerComponent {
  turf!: Turf
  constructor (private store: Store, private route: ActivatedRoute) {}

  ngOnInit () {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id) this.getData(id)
    })
  }

  getData (id: string) {
    this.store.select(getSingleTurf(id)).subscribe(data => {
      if (data) this.turf = data
    })
  }
}
