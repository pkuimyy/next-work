import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-echarts-demo',
  templateUrl: './echarts-demo.component.html',
  styleUrls: ['./echarts-demo.component.css']
})
export class EchartsDemoComponent implements OnInit {
  options: any;
  chartOption: EChartOption
  constructor() {
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    };
  }

  ngOnInit(): void {
  }

}
