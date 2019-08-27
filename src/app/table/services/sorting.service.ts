import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class SortingService {

  constructor(private dataService: DataService) { }

  dataSubject = new Subject<{}>();
  sortingData(data, field, strategy) {
    if (strategy !== '') {
      data.sort((a, b) => {
        if (typeof a[field] === 'string') {
          if (strategy === 'ascending') {
            return a[field].localeCompare(b[field]);
          } else {
            return b[field].localeCompare(a[field]);
          }
        } else {
          if (strategy === 'ascending') {
            return a[field] - b[field];
          } else {
            return b[field] - a[field];
          }
        }
      });
      this.dataSubject.next(data);
    } else {
      this.dataSubject.next(this.dataService.readData());
    }
  }
}
