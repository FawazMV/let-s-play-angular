import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SuccessPageData } from 'src/app/Models/app.models'

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  details!: SuccessPageData

  constructor (private route: ActivatedRoute) {}

  ngOnInit () {
    this.route.queryParams.subscribe(params => {
      this.details = params as SuccessPageData
    })
  }
}
