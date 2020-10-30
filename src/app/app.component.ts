import { Component } from '@angular/core';

class Education {
  school_name: string;
  discipline_name: string;
}

class Work {
  corporation_name: string;
  industry_name: string;
  architecture_name: string;
  position_name: string;
  achievement: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'next-work';
  name = 'sysu_info';
  email = 'sysu_info@qq.com';
  education_list: Education[] = [
    new Education,
    new Education,
  ]
  work_list: Work[] = [
    new Work,
    new Work,
  ]


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
