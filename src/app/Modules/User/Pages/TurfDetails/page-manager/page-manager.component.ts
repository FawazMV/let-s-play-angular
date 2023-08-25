import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { Turf } from 'src/app/Models/app.models'
import { getSingleTurf } from '../../../store/turf.selectors'

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.css']
})
export class TurfDetailsPageManagerComponent implements OnInit, OnDestroy {
  turf!: Turf
  sub1$!: Subscription
  sub2$!: Subscription
  constructor (private store: Store, private route: ActivatedRoute) {}

  ngOnInit () {
    this.sub1$ = this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id) this.getData(id)
    })
  }

  getData (id: string) {
    this.sub2$ = this.store.select(getSingleTurf(id)).subscribe(data => {
      if (data) this.turf = data
    })
  }
  ngOnDestroy (): void {
    this.sub1$?.unsubscribe()
    this.sub2$?.unsubscribe()
  }
}
