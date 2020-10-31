import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { Work } from '../model/work';
import { ShareService } from '../share.service'
import { Result } from "../model/result";
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-output-panel',
  templateUrl: './output-panel.component.html',
  styleUrls: ['./output-panel.component.css']
})
export class OutputPanelComponent implements OnInit {
  education_list: Education[]
  work_list: Work[]
  result: Result
  options: EChartOption
  nodes: any = []
  links: any = []

  constructor(private share: ShareService) {
    // this.education_list = share.get_education_list()
    // this.work_list = share.get_work_list()
    this.result = share.get_result()
    this.reshape()
    this.options = {
      title: {
        text: 'Your Next Work'
      },
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'circular',
          symbolSize: 50,
          roam: true,
          label: {
            show: true
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            fontSize: 20
          },
          data: this.nodes,
          links: this.links,
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      ]
    }
  }

  reshape(): void {
    for (let i = 0; i < this.result.chain.length; i++) {
      let item = this.result.chain[i]
      this.nodes.push({
        name: item.name,
        type: item.type,
      })
    }
    for (let i = 0; i < this.result.chain.length - 1; i++) {
      let prev = this.result.chain[i]
      let next = this.result.chain[i + 1]
      this.links.push({
        source: prev.name,
        target: next.name,
        label: prev.relation_type
      })
    }
  }

  ngOnInit(): void {
  }

}
