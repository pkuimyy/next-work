import { Injectable } from '@angular/core';
import { Education } from './model/education';
import { Work } from './model/work';
import { Result } from './model/result';
import { fake } from './data/fake';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  education_list: Education[] = [
    new Education,
    new Education,
  ]
  work_list: Work[] = [
    new Work,
    new Work,
  ]
  get_result(): Result {
    return fake
  }
  constructor() { }
}
