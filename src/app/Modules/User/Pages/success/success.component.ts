import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { SuccessPageData } from 'src/app/Models/app.models'

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit, OnDestroy {
  details!: SuccessPageData
  sub$!: Subscription
  constructor (private route: ActivatedRoute) {}

  ngOnInit () {
    this.route.queryParams.subscribe(params => {
      this.details = params as SuccessPageData
    })
  }
  ngOnDestroy (): void {
    this.sub$.unsubscribe()
  }
}
