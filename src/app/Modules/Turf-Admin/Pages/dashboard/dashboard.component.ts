import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { GraphData } from 'src/app/Models/app.models'
import { getGraphData } from '../../redux/turf-admin.selectors'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  graphData!: GraphData[]
  sub$!: Subscription
  constructor (private store: Store) {}

  ngOnInit (): void {
    this.sub$ = this.store
      .select(getGraphData)
      .subscribe(data => (this.graphData = data))
  }
  ngOnDestroy (): void {
    this.sub$.unsubscribe()
  }
}
