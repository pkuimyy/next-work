import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Education } from '../model/education';
import { Work } from '../model/work'

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})
export class InputPanelComponent implements OnInit {
  name = 'sysu_info'
  email = 'sysu_info@qq.com'
  education_list: Education[]
  work_list: Work[]
  constructor(private share: ShareService) {
    this.education_list = share.get_education_list()
    this.work_list = share.get_work_list()
  }
  ngOnInit(): void {

  }
  onAddEducation() {
    if (this.education_list.length >= 10) {
      return
    }
    this.education_list.push(new Education)
  }

  onDeleteEducation(education_index: number) {
    if (this.education_list.length === 1) {
      return
    }
    this.education_list = this.education_list.filter(
      (_, index) => { return index != education_index })
  }

  onAddWork() {
    if (this.work_list.length >= 10) {
      return
    }
    this.work_list.push(new Work)
  }

  onDeleteWork(work_index: number) {
    if (this.work_list.length === 1) {
      return
    }
    this.work_list = this.work_list.filter(
      (_, index) => { return index != work_index }
    )
  }

}
