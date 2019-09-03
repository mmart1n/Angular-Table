import { Pipe, PipeTransform } from '@angular/core';
import { PagingService } from './services/paging.service';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {
  constructor(private pagingService: PagingService) { }

  transform(data: any, filteringInfo: {}): any {
    const result: {}[] = [];
    let flag: boolean;
    let filterString = false;
    if (filteringInfo === undefined) {
      this.pagingService.dataLength = data.length;
      return data;
    }
    Object.keys(filteringInfo).forEach((x) => {
      if (filteringInfo[x] !== '') {
        filterString = true;
      }
    });
    if (!filterString) {
      this.pagingService.dataLength = data.length;
      return data;
    }
    for (const item of data) {
      flag = false;

      for (const colName of Object.keys(filteringInfo)) {
        if (filteringInfo[colName] === '') {
          continue;
        }
        if (String(item[colName]).includes(filteringInfo[colName])) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
      if (flag) {
        result.push(item);
      }
    }
    this.pagingService.dataLength = result.length;
    return result;
  }

}
