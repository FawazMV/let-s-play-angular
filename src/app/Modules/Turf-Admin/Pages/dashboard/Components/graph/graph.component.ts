import { Component, Input, OnInit } from '@angular/core'
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from 'ng-apexcharts'
import { GraphData } from 'src/app/Models/app.models'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input('data') data!: GraphData[]

  title: ApexTitleSubtitle = {
    text: 'Monthly Earnings',
    align: 'left'
  }
  stroke: ApexStroke = { curve: 'straight' }
  series!: ApexAxisChartSeries

  chart: ApexChart = {
    type: 'line',
    height: 350,
    zoom: {
      enabled: false
    }
  }

  grid: ApexGrid = {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  }
  xaxis: ApexXAxis = {
    categories: month
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }

  ngOnInit () {
    this.series = [
      {
        name: 'Earnings',
        data: this.data.map(x => x.totalPrice)
      }
    ]
  }
}

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
