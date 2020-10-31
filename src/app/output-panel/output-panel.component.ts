import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { Work } from '../model/work';
import { ShareService } from '../share.service'

@Component({
  selector: 'app-output-panel',
  templateUrl: './output-panel.component.html',
  styleUrls: ['./output-panel.component.css']
})
export class OutputPanelComponent implements OnInit {
  education_list: Education[]
  work_list: Work[]
  constructor(private share: ShareService) {
    this.education_list = share.education_list
    this.work_list = share.work_list
    console.log(this.work_list)
    console.log(this.education_list)
  }

  ngOnInit(): void {
  }

}
