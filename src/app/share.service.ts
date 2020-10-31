import { Injectable } from '@angular/core';
import { Education } from './model/education';
import { Work } from './model/work';
import { Result } from './model/result';
import { fake, education_list, work_list } from './data/fake';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  get_result(): Result {
    return fake
  }
  get_education_list(): Education[] {
    return education_list
  }
  get_work_list(): Work[] {
    return work_list
  }
  constructor() { }
}
